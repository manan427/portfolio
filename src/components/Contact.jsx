import emailjs from '@emailjs/browser'; // ✅ Import EmailJS
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const serviceID = 'service_yonouvx'; // ⚠️ Replace with your actual EmailJS service ID
    const templateID = 'template_0zjg42i'; // ⚠️ Replace with your template ID
    const publicKey = 'yXIyWr8exHFR6ObDD';   // ⚠️ Replace with your public (user) key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, title: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { icon: <FaPhone />, title: 'Phone', value: personalInfo.phone, link: `tel:${personalInfo.phone.replace(/\D/g, '')}` },
    { icon: <FaMapMarkerAlt />, title: 'Location', value: personalInfo.location, link: `https://maps.google.com/?q=${personalInfo.location}` }
  ];

  return (
    <section id="contact" className="section-padding bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
      <div className="glow-spot glow-spot-accent bottom-0 right-1/4 w-[400px] h-[400px] opacity-15"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Get In Touch
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
            className="section-subtitle"
          >
            Feel free to reach out for collaborations, projects, or just a friendly hello
          </motion.p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="flex items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center mr-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-400 text-xs uppercase tracking-wider">{item.title}</h4>
                    <a 
                      href={item.link} 
                      className="text-neutral-200 hover:text-white transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-white">Follow Me</h3>
            <div className="flex space-x-4">
              {personalInfo.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-0.5 transition-all duration-300"
                  aria-label={link.platform}
                >
                  {link.platform === 'github' && <FaGithub size={18} />}
                  {link.platform === 'linkedin' && <FaLinkedinIn size={18} />}
                  {link.platform === 'twitter' && <FaTwitter size={18} />}
                  {link.platform === 'dribbble' && <FaDribbble size={18} />}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card bg-neutral-900/50 border-neutral-800/80 p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>

              {submitStatus === 'success' && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-lg mb-6 text-sm">
                  Your message has been sent successfully!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-6 text-sm">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-neutral-400 font-semibold text-xs uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-neutral-950 border rounded-lg text-neutral-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 transition-all text-sm ${
                      errors.name ? 'border-red-500/50' : 'border-neutral-800'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-neutral-400 font-semibold text-xs uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-neutral-950 border rounded-lg text-neutral-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 transition-all text-sm ${
                      errors.email ? 'border-red-500/50' : 'border-neutral-800'
                    }`}
                    placeholder="Your email"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-neutral-400 font-semibold text-xs uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-neutral-950 border rounded-lg text-neutral-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 transition-all text-sm ${
                      errors.subject ? 'border-red-500/50' : 'border-neutral-800'
                    }`}
                    placeholder="Subject of your message"
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-400 font-semibold text-xs uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-2.5 bg-neutral-950 border rounded-lg text-neutral-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 transition-all text-sm resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-neutral-800'
                    }`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
