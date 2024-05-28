import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavbarUpper from './NavbarUpper';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar({ Link1, Link2, Link3, Link4, Link5 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <NavbarUpper />
      <nav className="bg-white font-bold text-lg relative">
        <div className="justify-center mx-auto max-w-screen-xl p-4">
          {/* Render the original navbar flex mode on medium and large devices */}
          <div className="hidden sm:flex flex-col md:flex-row md:justify-center">
            <ul className="flex sm:space-x-5 lg:space-x-32 text-gray-400">
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} relative hover:text-rose-950 hover:after:bg-rose-950 hover:after:h-0.5 hover:after:block hover:after:content:'' hover:after:absolute hover:after:w-full hover:after:bottom-0`
                  }
                >
                  {Link1}
                </NavLink>
              </li>
              <li className="mb-4 sm:mb-0">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} relative hover:text-rose-950 hover:after:bg-rose-950 hover:after:h-0.5 hover:after:block hover:after:content:'' hover:after:absolute hover:after:w-full hover:after:bottom-0`
                  }
                >
                  {Link2}
                </NavLink>
              </li>
              <li className="mb-4 sm:mb-0">
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} relative hover:text-rose-950 hover:after:bg-rose-950 hover:after:h-0.5 hover:after:block hover:after:content:'' hover:after:absolute hover:after:w-full hover:after:bottom-0`
                  }
                >
                  {Link3}
                </NavLink>
              </li>
              <li className="mb-4 sm:mb-0">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} relative hover:text-rose-950 hover:after:bg-rose-950 hover:after:h-0.5 hover:after:block hover:after:content:'' hover:after:absolute hover:after:w-full hover:after:bottom-0`
                  }
                >
                  {Link4}
                </NavLink>
              </li>
              <li className="mb-4 sm:mb-0">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} relative hover:text-rose-950 hover:after:bg-rose-950 hover:after:h-0.5 hover:after:block hover:after:content:'' hover:after:absolute hover:after:w-full hover:after:bottom-0`
                  }
                >
                  {Link5}
                </NavLink>
              </li>
            </ul>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
          <MenuIcon /></button>
       
          <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col sm:flex-row sm:space-x-5 py-4 lg:space-x-32 text-gray-400">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} hover:text-rose-950`
                  }
                >
                  {Link1}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} hover:text-rose-950`
                  }
                >
                  {Link2}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} hover:text-rose-950`
                  }
                >
                  {Link3}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} hover:text-rose-950`
                  }
                >
                  {Link4}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} hover:text-rose-950`
                  }
                  >
{Link5}
</NavLink>
</li>
</ul>
</div>
</div>
</nav>
</>
);
}

export default Navbar;