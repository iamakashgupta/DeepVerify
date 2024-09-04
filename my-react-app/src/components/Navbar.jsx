import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar({ onToggleDarkMode, darkMode }) {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold font-poppins">
          DeepVerify.com
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded-md">Home</Link>
          <Link to="/statistics" className="text-white hover:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded-md">Statistics</Link>
          <Link to="/contact" className="text-white hover:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded-md">Contact</Link>
          <Link to="/help" className="text-white hover:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded-md">Help</Link>
          {user ? (
            <Link to="/profile" className="text-white hover:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded-md">Profile</Link>
          ) : (
            <Link to="/login" className="text-white hover:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded-md">Login</Link>
          )}
          <button 
            onClick={onToggleDarkMode} 
            className="text-white bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-md"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
