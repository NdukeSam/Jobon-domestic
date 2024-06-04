import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="top-0 z-50 py-3">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="logo flex items-center flex-shrink-0">
                    <span className="text-xl font-bold">JobOn</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    <li>
                        <a href="#">About</a>
                        <a href="#">Policy</a>
                        <a href="#">Contact</a>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
