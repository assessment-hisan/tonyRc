// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX, HiOutlineShoppingCart, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY < 10);
      setIsScrolled(currentY > 50);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div className="px-2 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-lg">tonyRC</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                RC Garage
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Power & Precision</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Home', path: '/' },
              { name: 'Shop', path: '/shop' },
              { name: 'Categories', path: '/categories' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="relative px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute inset-x-4 bottom-0 height-0.5 bg-gradient-to-r from-red-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Icons */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-300 group">
              <HiOutlineSearch className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* User Account */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-300 group">
              <HiOutlineUser className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Shopping Cart */}
            <button className="relative flex items-center justify-center w-10 h-10 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-300 group">
              <HiOutlineShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-300 ml-2"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-100">
            {/* Mobile Search Bar */}
            <div className="px-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
                <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <ul className="space-y-1 px-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Shop', path: '/shop' },
                { name: 'Categories', path: '/categories' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={toggleMenu}
                    className={`flex items-center py-3 px-4 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-2 animate-slide-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Action Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-6 px-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300">
                <HiOutlineUser className="w-5 h-5" />
                <span className="text-sm font-medium">Account</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-300">
                <HiOutlineShoppingCart className="w-5 h-5" />
                <span className="text-sm font-medium">Cart (3)</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out both;
        }
      `}</style>
    </header>
  );
};

export default Navbar;