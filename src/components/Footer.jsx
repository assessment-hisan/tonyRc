// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">RC Garage</h4>
          <p className="text-sm">
            Premium RC cars for racers and hobbyists. Unleash your racing passion with the best in class models and parts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold mb-3 text-white">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h5 className="font-semibold mb-3 text-white">Categories</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Crawlers</a></li>
            <li><a href="#" className="hover:text-white">Drag Racing</a></li>
            <li><a href="#" className="hover:text-white">Drift Cars</a></li>
            <li><a href="#" className="hover:text-white">Trucks</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="font-semibold mb-3 text-white">Contact Us</h5>
          <p className="text-sm">📍 123 RC Street, Speed City</p>
          <p className="text-sm">📞 +1 800-123-4567</p>
          <p className="text-sm">✉️ support@rcgarage.com</p>

          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} RC Garage. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
