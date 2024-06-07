import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center fixed left-0 top-0 z-50 py-3 w-full bg-opacity-75">
      <div className="max-w-6xl w-full flex items-center px-4">
        <div className="logo flex items-center flex-shrink-0 flex-grow">
          <span className="text-xl font-bold text-white">JobOn</span>
        </div>
        <ul className="hidden lg:flex font-semibold space-x-12 text-white flex-shrink-0">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/policy">Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
