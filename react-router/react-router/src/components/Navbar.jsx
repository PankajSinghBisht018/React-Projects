import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import logo from './logo.png';
import LoginForm from './LoginForm'; 

function Navbar( {Link1, Link2, Link3, Link4}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    

    const toContact = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/news");
        }, 2500);
    }

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
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
                                    } hover:text-orange-400 hover:underline`
                                }
                            >
                                {Link1}
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
                                {Link2}
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
                                {Link3}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/news"
                                onClick={toContact}
                                className={({ isActive }) =>
                                    `block py-2 ${isActive ? 'text-pink-600 underline' : 'text-gray-300'
                                    } hover:text-orange-400 hover:underline`
                                }>
                                {Link4}
                            </NavLink>
                        </li>
                        <button className='rounded-xl text-white bg-blue-900 py-2 px-4 shadow-xl' onClick={toggleLoginForm}>Login</button>
                    </ul>
                </div>
            </div>

            {showLoginForm && <LoginForm onClose={toggleLoginForm} />} 
            
            {loading && (
                <div className="fixed inset-0 flex justify-center items-center bg-blue-950 bg-opacity-60">
                    <BounceLoader size={60} color={"#123abc"} loading={loading} />
                </div>
            )}
        </nav>
    );
}

export default Navbar;