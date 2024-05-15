import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './logo.png';

function Navbar() {
  const navigate =useNavigate();
  const onHome=()=>{
    navigate("/");
  }
  return (
    <nav className="bg-blue-950 p-5 font-bold text-lg">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center">
          <NavLink to="/" className="text-white text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-20" />
          </NavLink>
        </div>

        <div className="flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-pink-600 underline' : 'text-gray-300'
                  } hover:text-orange-400 hover:underline `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-pink-600 underline' : 'text-gray-300'
                  } hover:text-orange-400 hover:underline`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-pink-600 underline' : 'text-gray-300'
                  } hover:text-orange-400 hover:underline`
                }
              >
                Contact
              </NavLink>
            </li>
            <button className='rounded-xl text-white bg-blue-900 py-2 px-4 shadow-xl' onClick={onHome}>Login</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
