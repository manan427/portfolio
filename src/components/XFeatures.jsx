import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTerminal, FaDatabase, FaPlay, FaSync, FaExclamationTriangle, FaCheckCircle, FaUndo } from 'react-icons/fa';

const XFeatures = () => {
  const [activeTab, setActiveTab] = useState('sql'); // 'sql' or 'alerts'
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // SQL State
  const [selectedTemplate, setSelectedTemplate] = useState('n1');
  const [sqlQuery, setSqlQuery] = useState('');
  const [sqlOptimizing, setSqlOptimizing] = useState(false);
  const [sqlLogs, setSqlLogs] = useState([]);
  const [sqlResult, setSqlResult] = useState(null);

  // Alerts State
  const [alertOptimizing, setAlertOptimizing] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [alertLogs, setAlertLogs] = useState([]);
  const [alertResolved, setAlertResolved] = useState({});

  const sqlTemplates = {
    n1: {
      name: "Slow N+1 Pattern",
      original: `-- Fetch users and their orders in a loop (Causes N+1 Database Hits)\nSELECT id, name FROM users;\n\n-- Repeated for each user:\nSELECT * FROM orders WHERE user_id = 1;\nSELECT * FROM orders WHERE user_id = 2;\nSELECT * FROM orders WHERE user_id = 3;`,
      optimized: `-- Single optimized query using JOIN & Aggregation (1 Database Hit)\nSELECT \n  u.id, \n  u.name, \n  json_agg(o.*) AS user_orders\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.id, u.name;`,
      logs: [
        "Analyzing SQL query patterns...",
        "Bottleneck found: N+1 query execution detected (O(N) DB roundtrips).",
        "Semantic Validation: verified user-order relations (PK/FK).",
        "Analyzing EXPLAIN ANALYZE logs: index scan vs sequential scan...",
        "Rewriting query to aggregate orders into a JSON list using CTE & LEFT JOIN.",
        "Optimization Complete! Calculated cost reduction: 98.4%."
      ],
      details: [
        "Eliminates O(N) database trips by rewriting query into O(1) single-hit query.",
        "Uses PostgreSQL json_agg to bundle related orders directly at database level.",
        "Estimated Speedup: 25x faster on 500+ records (reduced from 1240ms to 48ms)."
      ]
    },
    join: {
      name: "Unindexed JOIN Bottleneck",
      original: `-- Slow Join without indexes on big datasets\nSELECT \n  e.name, d.department_name \nFROM employees e \nJOIN departments d ON e.dept_id = d.id\nWHERE e.salary > 80000;`,
      optimized: `-- Optimized with appropriate indexing suggestions & CTE filters\nCREATE INDEX CONCURRENTLY IF NOT EXISTS idx_employees_dept_salary \nON employees (dept_id, salary);\n\nSELECT \n  e.name, \n  d.department_name \nFROM employees e \nINNER JOIN departments d ON e.dept_id = d.id\nWHERE e.salary > 80000;`,
      logs: [
        "Running schema index checker...",
        "Warning: dept_id on table employees has no active index (causing Sequential Scan).",
        "Analyzing join cardinality...",
        "Suggesting Concurrent Index creation to prevent DB locking during write operations.",
        "EXPLAIN ANALYZE prediction: changing Hash Join to Index Scan.",
        "Optimization Complete! Suggested DDL index script generated."
      ],
      details: [
        "Discovered missing index on foreign key dept_id which caused full table scans.",
        "Created CONCURRENT INDEX script to execute safe production indexing.",
        "Estimated Speedup: 18x faster (reduced scan time from 840ms to 12ms)."
      ]
    }
  };

  const alertTemplates = [
    {
      id: "a1",
      title: "Memory Leak in Web-Service Pod",
      source: "OpenTelemetry Alert",
      severity: "CRITICAL",
      description: "Memory utilization at 98% and growing. HTTP latency spiked to >1.5s.",
      remediation: "Restart container gracefully, inject memory garbage collection ENV flags, and scale replicas to 3.",
      logs: [
        "Aggregating telemetry: Web-Service pod memory exceeded threshold.",
        "LLM Remediation: Identifying root cause... (Memory leak in python event loop).",
        "Ansible integration triggered: Generating playbook remediate_leak.yml...",
        "Playbook task: kubectl rollout restart deployment/web-service-api",
        "Playbook task: scale deployment/web-service-api --replicas=3",
        "Observed telemetry post-remediation: Memory usage stabilized at 42%.",
        "Auto-healing sequence SUCCESSFUL!"
      ]
    },
    {
      id: "a2",
      title: "Database Connection Pool Exhausted",
      source: "Zabbix Monitoring Alert",
      severity: "HIGH",
      description: "FastAPI pool limit reached. MSSQL rejected 42 connection requests.",
      remediation: "Increase pool_size limit in FastAPI configuration, and execute SQL query rewrites on locks.",
      logs: [
        "Centralizing Zabbix alerts: connection pool exhausted (42 timeouts).",
        "LLM Remediation: Identified hanging transactions in SQL Optimizer logs.",
        "Ansible integration triggered: Tuning FastAPI database config parameters.",
        "Ansible playbook: modifying api_config.json -> pool_size=50, max_overflow=20.",
        "Executing connection pool flush...",
        "Database monitoring check: pool connection utilization back to normal (12/50).",
        "Observability check: status GREEN."
      ]
    }
  ];

  useEffect(() => {
    setSqlQuery(sqlTemplates[selectedTemplate].original);
    setSqlResult(null);
    setSqlLogs([]);
  }, [selectedTemplate]);

  const handleSqlOptimize = () => {
    setSqlOptimizing(true);
    setSqlLogs([]);
    setSqlResult(null);
    
    const logs = sqlTemplates[selectedTemplate].logs;
    let currentLogIndex = 0;
    
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setSqlLogs(prev => [...prev, `[Agent] ${logs[currentLogIndex]}`]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setSqlOptimizing(false);
        setSqlResult(sqlTemplates[selectedTemplate]);
      }
    }, 450);
  };

  const handleAlertRemediate = (alert) => {
    setSelectedAlert(alert.id);
    setAlertOptimizing(true);
    setAlertLogs([]);
    
    let currentLogIndex = 0;
    const logs = alert.logs;
    
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setAlertLogs(prev => [...prev, `[Protaigo] ${logs[currentLogIndex]}`]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setAlertOptimizing(false);
        setAlertResolved(prev => ({ ...prev, [alert.id]: true }));
      }
    }, 450);
  };

  const resetAlert = (alertId) => {
    setAlertResolved(prev => ({ ...prev, [alertId]: false }));
    if (selectedAlert === alertId) {
      setAlertLogs([]);
      setSelectedAlert(null);
    }
  };

  return (
    <section id="interactive-demos" className="section-padding bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
      {/* Background decoration */}
      <div className="glow-spot glow-spot-primary top-1/2 right-1/4 w-[450px] h-[450px] opacity-10"></div>
      <div className="glow-spot glow-spot-accent bottom-0 left-1/4 w-[350px] h-[350px] opacity-15"></div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 rounded-full border border-accent-500/20 bg-accent-500/10 text-accent-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            Agentic AI Sandbox
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            System &amp; AI Prototypes
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="section-subtitle text-neutral-400"
          >
            Interact with live simulations of my core engineering projects: the SQL Optimizer Agent and Protaigo Alerts Auto-Healing engine.
          </motion.p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10 max-w-md mx-auto bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-1.5 backdrop-blur-md">
          <button
            onClick={() => setActiveTab('sql')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === 'sql' 
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md' 
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
            }`}
          >
            <FaDatabase size={14} />
            SQL Optimizer Agent
          </button>
          <button
            onClick={() => setActiveTab('alerts')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === 'alerts' 
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md' 
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
            }`}
          >
            <FaTerminal size={14} />
            Protaigo Auto-Healing
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'sql' ? (
              <motion.div
                key="sql"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left controls */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="glass-card bg-neutral-900/50 border-neutral-800/80 p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <FaDatabase className="text-primary-500" />
                      Optimizer Setup
                    </h3>

                    {/* Template Selectors */}
                    <div className="space-y-3 mb-6">
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                        Choose SQL Bottleneck Template
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.keys(sqlTemplates).map(key => (
                          <button
                            key={key}
                            disabled={sqlOptimizing}
                            onClick={() => setSelectedTemplate(key)}
                            className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                              selectedTemplate === key
                                ? 'bg-primary-500/10 border-primary-500 text-primary-400'
                                : 'bg-neutral-800/50 border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
                            }`}
                          >
                            {sqlTemplates[key].name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* SQL input area */}
                    <div className="space-y-2 mb-6">
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                        Target SQL Query
                      </label>
                      <textarea
                        value={sqlQuery}
                        onChange={(e) => setSqlQuery(e.target.value)}
                        disabled={sqlOptimizing}
                        rows={7}
                        className="w-full font-mono text-xs p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Button trigger */}
                    <button
                      onClick={handleSqlOptimize}
                      disabled={sqlOptimizing}
                      className="w-full btn btn-primary py-2.5 flex items-center justify-center gap-2"
                    >
                      <FaPlay size={10} className={sqlOptimizing ? 'animate-spin' : ''} />
                      {sqlOptimizing ? 'Agent Analyzing...' : 'Run SQL Optimizer'}
                    </button>
                  </div>

                  {/* Terminal Console Logs */}
                  <div className="glass-card bg-neutral-950 border-neutral-800/80 p-5 font-mono text-xs overflow-hidden h-[220px] flex flex-col">
                    <span className="text-neutral-500 border-b border-neutral-800/60 pb-2 mb-3 flex items-center justify-between">
                      <span>AGENT LOGGER CONSOLE</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    </span>
                    <div className="flex-1 overflow-y-auto space-y-2 text-neutral-400">
                      {sqlLogs.length === 0 && (
                        <p className="text-neutral-600 italic">Ready. Choose a template and click "Run SQL Optimizer" to trigger agent analysis logs.</p>
                      )}
                      {sqlLogs.map((log, idx) => (
                        <p key={idx} className="leading-relaxed border-l-2 border-primary-500/60 pl-2">
                          {log}
                        </p>
                      ))}
                      {sqlOptimizing && (
                        <div className="flex items-center gap-1.5 text-primary-400 animate-pulse pl-2 font-bold">
                          <FaSync className="animate-spin" size={10} />
                          Thinking...
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Output Panel */}
                <div className="lg:col-span-7">
                  <div className="glass-card bg-neutral-900/50 border-neutral-800/80 p-6 h-full flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-neutral-800/60 pb-3">
                      <FaCheckCircle className="text-emerald-500 animate-pulse" />
                      Optimization Result
                    </h3>

                    {!sqlResult ? (
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-neutral-800/80 rounded-xl bg-neutral-950/30">
                        <FaDatabase className="text-neutral-700 text-5xl mb-4" />
                        <h4 className="text-neutral-400 font-bold mb-2">Awaiting Optimization Run</h4>
                        <p className="text-neutral-500 text-xs max-w-sm">Trigger the SQL Agent Optimizer on the left to see the rewritten query structure and speedup analysis.</p>
                      </div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="flex-1 flex flex-col justify-between space-y-6"
                      >
                        {/* SQL Code Compare */}
                        <div className="space-y-4">
                          <div>
                            <span className="block text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wider">Optimized Query structure</span>
                            <pre className="p-3.5 rounded-lg bg-neutral-950 border border-emerald-500/20 text-[11px] font-mono text-neutral-200 overflow-x-auto max-h-[190px]">
                              <code>{sqlResult.optimized}</code>
                            </pre>
                          </div>
                        </div>

                        {/* Performance Details */}
                        <div className="space-y-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                          <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Optimizations Performed</h4>
                          <ul className="space-y-2">
                            {sqlResult.details.map((detail, idx) => (
                              <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2">
                                <span className="text-emerald-500 mt-0.5">&bull;</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="alerts"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left Active Alerts Feed */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="glass-card bg-neutral-900/50 border-neutral-800/80 p-6">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                      <FaExclamationTriangle className="text-red-500" />
                      Active Zabbix / OpenTelemetry Alerts
                    </h3>

                    <div className="space-y-4">
                      {alertTemplates.map((alert) => {
                        const isResolved = alertResolved[alert.id];
                        const isActive = selectedAlert === alert.id;

                        return (
                          <div 
                            key={alert.id}
                            className={`p-4 rounded-xl border transition-all duration-300 ${
                              isResolved 
                                ? 'bg-emerald-500/5 border-emerald-500/20' 
                                : isActive 
                                  ? 'bg-neutral-900 border-primary-500/50 shadow-md shadow-primary-500/5' 
                                  : 'bg-neutral-950 border-neutral-800/80 hover:border-neutral-700'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                isResolved 
                                  ? 'bg-emerald-500/20 text-emerald-400' 
                                  : alert.severity === 'CRITICAL' 
                                    ? 'bg-red-500/25 text-red-400' 
                                    : 'bg-amber-500/25 text-amber-400'
                              }`}>
                                {isResolved ? 'RESOLVED' : alert.severity}
                              </span>
                              <span className="text-[10px] text-neutral-500 font-medium">{alert.source}</span>
                            </div>

                            <h4 className="text-sm font-bold text-white mb-1">{alert.title}</h4>
                            <p className="text-xs text-neutral-400 mb-4">{alert.description}</p>

                            {isResolved ? (
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                                  <FaCheckCircle /> Playbook Executed
                                </span>
                                <button 
                                  onClick={() => resetAlert(alert.id)}
                                  className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                                >
                                  <FaUndo size={10} /> Reset Alert
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => handleAlertRemediate(alert)}
                                disabled={alertOptimizing}
                                className={`w-full py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                                  alertOptimizing
                                    ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                                    : 'bg-primary-600/90 hover:bg-primary-500 text-white cursor-pointer'
                                }`}
                              >
                                <FaPlay size={8} />
                                {isActive && alertOptimizing ? 'Healing in progress...' : 'Trigger Auto-Healing'}
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Observability console logger */}
                <div className="lg:col-span-6">
                  <div className="glass-card bg-neutral-950 border-neutral-800/80 p-6 h-full flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-neutral-800/60 pb-3">
                      <FaTerminal className="text-primary-400" />
                      Protaigo LLM &amp; Ansible Log console
                    </h3>

                    <div className="flex-1 overflow-y-auto space-y-3 font-mono text-xs min-h-[280px]">
                      {alertLogs.length === 0 && (
                        <div className="flex flex-col items-center justify-center text-center h-full text-neutral-600 italic p-8">
                          <FaTerminal className="text-neutral-800 text-4xl mb-4" />
                          <p>Console Idle.</p>
                          <p className="text-[10px] mt-1">Click "Trigger Auto-Healing" on an active Zabbix alert to monitor the Protaigo execution path.</p>
                        </div>
                      )}
                      {alertLogs.map((log, idx) => {
                        let textClass = "text-neutral-400";
                        if (log.includes("SUCCESSFUL") || log.includes("GREEN")) textClass = "text-emerald-400 font-bold";
                        if (log.includes("Playbook") || log.includes("Ansible")) textClass = "text-primary-400";
                        if (log.includes("LLM")) textClass = "text-purple-400";
                        
                        return (
                          <p key={idx} className={`leading-relaxed border-l border-neutral-800 pl-2.5 ${textClass}`}>
                            {log}
                          </p>
                        );
                      })}
                      {alertOptimizing && (
                        <div className="flex items-center gap-1.5 text-primary-400 animate-pulse pl-2.5 font-bold">
                          <FaSync className="animate-spin" size={10} />
                          Auto-Healing Sequence Running...
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default XFeatures;
