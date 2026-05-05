import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    // { name: 'Benefits', href: '#benefits' },
    // { name: 'Plans', href: '#plans' },
    // { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/oxxy_logo.png" alt="Oxxy Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gradient px-6 py-2.5 rounded-full shadow-premium"
          >
            Get Plan
          </a>
        </div>

        {/* Mobile View Button */}
        <div className="md:hidden">
          <a
            href="#contact"
            className="btn-gradient px-4 py-2 rounded-full text-sm font-bold shadow-premium"
          >
            Get Plan
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
