import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="top-0 z-50 py-3">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center ">
                <div className="logo flex items-center flex-shrink-0">
                    <span className=" ml-10 text-xl font-bold">JobOn</span>
                </div>
                <ul className="hidden lg:flex font-semibold space-x-12 mr-10">
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
        </div>
      </nav>
    </div>
  )
}

export default Navbar
