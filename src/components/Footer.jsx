import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="p-2 rounded-lg">
              <div className='md:mb-8 h-6 w-32'>
                <img src='/oxxy_logo.png' />
              </div>
            </div>
            <p className=" text-gray-500 leading-relaxed">
              India's leading healthcare savings platform helping families reduce their medical expenditure through pre-negotiated network rates.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 md:mt-4 bg-gray-50 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {["How it Works", "About Oxxy", "Network Hospitals", "Medical Camps", "Careers", "Media Coverage"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-4">
              {["FAQ's", "Patient Stories", "Terms of Service", "Privacy Policy", "Refund Policy", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-secondary">Helpline</p>
                  <p className="text-gray-500">+91 88008 55340</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-secondary">Email</p>
                  <p className="text-gray-500">info@oxxy.in</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-secondary">Location</p>
                  <p className="text-gray-500">New Delhi, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <div>
              <p className="text-gray-400 text-sm">© 2025 Oxxy Healthcare. All Rights Reserved.</p>
              <p className="text-xs text-gray-400 mt-1 italic">Oxxy is not an INSURANCE. Oxxy sells Discounted Health Plans.</p>
            </div>

            {/* Credit Section */}
            <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-gray-200 bg-gray-50 shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-300 ml-4">
              <a
                href="https://fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="FabulousMedia"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                  alt="FabulousMedia"
                  className="h-3 w-auto"
                  loading="lazy"
                  width="80"
                  height="12"
                />
              </a>
              <div className="h-3 w-px bg-gray-300 transition-colors duration-300"></div>
              <a
                href="https://gocommercially.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="GoCommercially"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                  alt="GoCommercially"
                  className="h-3 w-auto"
                  loading="lazy"
                  width="80"
                  height="12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
