import {
  FaDribbble,
  FaGithub,
  FaHeart,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { personalInfo } from '../data';

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  twitter: <FaTwitter />,
  dribbble: <FaDribbble />,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          {/* Logo / Title */}
          <h2 className="text-2xl font-bold mb-6 text-white">
            MM<span className="text-primary-500">.</span>
          </h2>

          {/* Social Links */}
          <div className="flex space-x-4 mb-8">
            {personalInfo.socialLinks.map((link, index) => {
              const Icon = iconMap[link.platform.toLowerCase()];
              const url = link.url.startsWith('http') ? link.url : `https://${link.url}`;
              return (
                Icon && (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-300"
                    aria-label={link.platform}
                  >
                    {Icon}
                  </a>
                )
              );
            })}
          </div>

          {/* Footer Text */}
          <div className="w-full border-t border-neutral-900 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
              <p className="text-center md:text-left mb-4 md:mb-0">
                &copy; {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-center md:text-right flex items-center justify-center">
                Made with <FaHeart className="text-red-500 mx-1 animate-pulse" /> and React
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
