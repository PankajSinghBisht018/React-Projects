import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './logo.png';

function Navbar({ Link1, Link2, Link3, Link4, Link5 }) {
  const navigate = useNavigate();

  const toCartjs = () => {
    navigate("/cart");
  }

  return (
    <nav className="bg-pink-400 p-5 font-bold text-lg">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center">
          <NavLink to="/" className="text-white text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-20" />
          </NavLink>
        </div>

        <div className="flex space-x-8">
          <ul className=" md:flex  space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-rose-950 underline' : 'text-white'
                  } hover:underline decoration-4`
                }
              >
                {Link1}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-rose-950 underline' : 'text-white'
                  } hover:underline decoration-4`
                }
              >
                {Link2}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-rose-950 underline' : 'text-white'
                  } hover:underline decoration-4`
                }
              >
                {Link3}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-rose-950 underline' : 'text-white'
                  } hover:underline decoration-4`
                }
              >
                {Link4}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-rose-950 underline' : 'text-white'
                  } hover:underline decoration-4`
                }
              >
                {Link5}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <button className='rounded-xl text-white bg-rose-950 py-2 px-4 shadow-xl'>Login</button>
          <button className='rounded-xl text-white bg-rose-950 py-2 px-4 shadow-xl'>Signup</button>
          <button className='rounded-xl text-white bg-rose-950 py-2 px-4 shadow-xl ' onClick={toCartjs}>Cart</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
