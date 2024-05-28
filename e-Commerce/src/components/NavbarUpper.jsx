import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Toolbar, IconButton, Button, InputBase, Box, MenuItem, Select, FormControl } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth0 } from '@auth0/auth0-react';
import logo from './logo.png';

function NavbarUpper() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [location, setLocation] = React.useState('Mumbai');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar className="flex justify-between">
        <Box className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-auto md:h-24 lg:h-28" />
          </NavLink>
        </Box>
        <Box className="flex-1 flex justify-center px-4 md:px-10">
          <form className="w-full flex items-center">
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l focus:outline-none"
            />
            <IconButton type="submit" className="bg-blue-600 text-white rounded-r px-3 py-2">
              <FontAwesomeIcon icon={faSearch} />
            </IconButton>
          </form>
        </Box>
        <Box className="flex items-center space-x-4">
          <FormControl variant="outlined" className="hidden md:block min-w-[120px]">
            <Select
              value={location}
              onChange={handleLocationChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Select location' }}
              className="bg-white border border-gray-300 rounded"
            >
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Bangalore">Bangalore</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Kolkata">Kolkata</MenuItem>
            </Select>
          </FormControl>
          {isAuthenticated ? (
            <Link to="#" className="flex items-center">
              <Button onClick={() => logout({ returnTo: window.location.origin })} className="hidden md:flex">
                <img src={user.picture} alt="Profile" className="h-10 w-10 rounded-full" />
              </Button>
            </Link>
          ) : (
            <Link to="#" className="flex items-center">
              <Button endIcon={<AccountCircleIcon />} onClick={() => loginWithRedirect()}>
                <span className="hidden md:inline">Login</span>
              </Button>
            </Link>
          )}
          <Link to="/cart" className="hidden md:flex items-center">
            <Button endIcon={<ShoppingCartIcon />}>Cart</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarUpper;
