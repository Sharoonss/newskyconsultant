
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const services = [
    { name: 'Admission Services', path: '/services' },
    { name: 'Visa Assistance', path: '/services' },
    { name: 'Accommodation', path: '/services' },
    { name: 'Professional Course', path: '/services' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Disclaimer', path: '/disclaimer' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#DC2626]">Sky</span>
              <span className="text-[#3B82F6]"> Consultants</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for education, migration, and sponsorship opportunities in Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#DC2626] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-[#DC2626] transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Pages</h3>
            <ul className="space-y-3">
              {legalPages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-gray-400 hover:text-[#DC2626] transition-colors duration-300"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
  <div className="flex flex-col gap-2 w-full">
    {socialLinks.map((social) => (
      <a
        key={social.label}
        href={social.href}
        aria-label={social.label}
        className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200 w-full"
      >
        <span className="flex items-center justify-center w-5 h-5 flex-shrink-0"> 
                 <social.icon className="h-4 w-4 text-white" /> 
        </span>
        <span className="text-white text-sm font-medium">{social.label}</span>
      </a>
    ))}
  </div>
</div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">Copyright © 2025 Sky Consultants</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
