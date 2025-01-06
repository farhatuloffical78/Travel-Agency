import React from 'react';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 container mx-auto text-white p-5 py-6 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Logo and Name */}
        <div className=''>
          <img src={logo} alt="Logo" className="h-12 mb-4" />
          <h1 className="text-2xl font-semibold">Travel<span className='text-red-500'>Bloom</span>
          </h1>
        </div>
        
        {/* Column 2: Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">All Packages</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Umrah Package</a></li>
          </ul>
        </div>
        
        {/* Column 3: Image Input and Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <div className="mb-4">
            <input type="text" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className='m-5' />
      {/* Footer Text */}
      <div className="text-center font-bold mt-6 text-sm md:text-base">
        <p>&copy; 2025 Travel<span className='text-red-500 '>Bloom</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
