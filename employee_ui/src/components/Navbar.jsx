import React from 'react';

const Navbar = () => {
  return (
    <nav className=" flex items-start justify-center fixed left-0 top-0 z-50 py-3 w-full bg-opacity-75">
      <div className="max-w-4xl w-full flex justify-between items-center px-4">
        <div className="logo flex items-center flex-shrink-0">
          <span className="text-xl font-bold text-white">JobOn</span>
        </div>
        <ul className="hidden lg:flex font-semibold space-x-12 text-white">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Policy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
