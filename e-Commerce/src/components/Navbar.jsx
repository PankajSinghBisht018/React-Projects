import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import { motion } from 'framer-motion';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, IconButton, Hidden } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar({ Link1, Link2, Link3, Link5 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search check');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white font-bold text-lg relative">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-auto w-32 md:h-24" />
          </NavLink>
        </div>

        <Hidden mdDown>
          <div className="flex space-x-4">
            <ul className="flex space-x-8 text-gray-400">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} relative hover:text-rose-950 hover:after:bg-rose-950 hover:after:h-0.5 hover:after:block hover:after:content:'' hover:after:absolute hover:after:w-full hover:after:bottom-0`
                  }
                >
                  {Link1}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} relative hover:text-rose-950 hover:after:bg-rose-950 hover:after:h-0.5 hover:after:block hover:after:content:'' hover:after:absolute hover:after:w-full hover:after:bottom-0`
                  }
                >
                  {Link2}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-rose-950 ' : 'text-gray-700'} relative hover:text-rose-950 hover:after:bg-rose-950 hover:after:h-0.5 hover:after:block hover:after:content:'' hover:after:absolute hover:after:w-full hover:after:bottom-0`
                  }
                >
                  {Link3}
                </NavLink>
              </li>
              <li>
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
        </Hidden>

        <div className="flex items-center space-x-5">
          <Hidden mdDown>
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-l-lg focus:outline-none"
              />
              <button type="submit" className="bg-gray-700 text-white py-1 px-2 rounded-r-lg">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </Hidden>

          <Hidden mdDown>
            {
              isAuthenticated ? (
                <Link className="flex items-center rounded-xl text-gray-700 mr-2">
                  <Button onClick={() => logout({ returnTo: window.location.origin })}>
                    <img src={user.picture} alt="Profile" className='h-10 w-10 rounded-full' />
                  </Button>
                </Link>
              ) : (
                <Link className="flex items-center rounded-xl text-gray-700 mr-2">
                  <Button endIcon={<AccountCircleIcon />} onClick={() => loginWithRedirect()}>
                    Login
                  </Button>
                </Link>
              )
            }

            <Link to="/cart" className="flex items-center rounded-xl text-gray-700">
              <Button endIcon={<ShoppingCartIcon />}>Cart</Button>
            </Link>
          </Hidden>

          <Hidden mdUp>
            <IconButton className="text-gray-700" onClick={toggleMenu}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Hidden>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          className="md:hidden bg-white fixed top-0 left-0 right-0 z-10"
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-2 p-4">
            <li>
              <NavLink to="/" className="block py-2 text-gray-700" onClick={toggleMenu}>
                {Link1}
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="block py-2 text-gray-700" onClick={toggleMenu}>
                {Link2}
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className="block py-2 text-gray-700" onClick={toggleMenu}>
                {Link3}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block py-2 text-gray-700" onClick={toggleMenu}>
                {Link5}
              </NavLink>
            </li>
            <li className="flex items-center">
              <form onSubmit={handleSearch} className="flex items-center w-full mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-l-lg focus:outline-none w-full"
                  style={{ fontSize: '0.8rem', padding: '0.5rem' }} // Adjust font size and padding
                />
                <button type="submit" className="bg-gray-700 text-white py-1 px-2 rounded-r-lg">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </li>
            <li>
              {
                isAuthenticated ? (
                  <Link className="block rounded-xl text-gray-700 py-2" onClick={toggleMenu}>
                    <Button onClick={() => logout({ returnTo: window.location.origin })}>
                      <img src={user.picture} alt="Profile" className='h-10 w-10 rounded-full' />
                    </Button>
                  </Link>
                ) : (
                  <Link className="block rounded-xl text-gray-700 py-2" onClick={toggleMenu}>
                    <Button endIcon={<AccountCircleIcon />} onClick={() => loginWithRedirect()}>
                      Login
                    </Button>
                  </Link>
                )
              }
            </li>
            <li>
              <Link to="/cart" className="block rounded-xl text-gray-700 py-2" onClick={toggleMenu}>
                <Button endIcon={<ShoppingCartIcon />}>Cart</Button>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;

