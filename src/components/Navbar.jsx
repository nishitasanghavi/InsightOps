import React, { useState, useEffect } from 'react';
import { useTheme } from '../Context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [selectedLink, setSelectedLink] = useState('home');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const user = localStorage.getItem('users');
        setIsLoggedIn(!!user);
    }, []);

    const handleLinkClick = (link) => {
        setSelectedLink(link);

        // Redirect to login if not logged in and trying to access restricted pages
        if (!isLoggedIn && link !== 'home' && link !== 'signup' && link !== 'login') {
            navigate('/login');
        }
    };

    return (
        <div className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between p-4
        ${theme === 'dark' ? 'bg-[#000000] text-white' : 'bg-[#C9D7E4] text-black'}
        backdrop-blur-md shadow-lg rounded-lg transition-all duration-300`}>

            <img src="/images/logo.jpeg" alt="Logo" className="h-10 rounded-xl" />

            <ul className="hidden sm:flex gap-6 font-semibold">
                <li
                    className={`cursor-pointer text-lg hover:text-[#98B1C5] ${selectedLink === 'home' ? 'border-b-2 border-[#E2511A]' : ''}`}
                    onClick={() => handleLinkClick('home')}
                >
                    <Link to='/'>Home</Link>
                </li>

                {isLoggedIn ? (
                    <>
                        <li
                            className={`cursor-pointer text-lg hover:text-[#98B1C5] ${selectedLink === 'dashboard' ? 'border-b-2 border-[#E2511A]' : ''}`}
                            onClick={() => handleLinkClick('dashboard')}
                        >
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li
                            className={`cursor-pointer text-lg hover:text-[#98B1C5] ${selectedLink === 'joblisting' ? 'border-b-2 border-[#E2511A]' : ''}`}
                            onClick={() => handleLinkClick('joblisting')}
                        >
                            <Link to='/joblisting'>Find Jobs</Link>
                        </li>
                        <li
                            className={`cursor-pointer text-lg hover:text-[#98B1C5] ${selectedLink === 'freelancerlist' ? 'border-b-2 border-[#E2511A]' : ''}`}
                            onClick={() => handleLinkClick('freelancerlist')}
                        >
                            <Link to='/freelancerlist'>Find Freelancer</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li
                            className={`cursor-pointer text-lg hover:text-[#98B1C5]`}
                            onClick={() => handleLinkClick('dashboard')}
                        >
                            <Link to='/'>Dashboard</Link>
                        </li>
                        <li
                            className={`cursor-pointer text-lg hover:text-[#98B1C5]`}
                            onClick={() => handleLinkClick('joblisting')}
                        >
                            <Link to='/'>Find Jobs</Link>
                        </li>
                        <li
                            className={`cursor-pointer text-lg hover:text-[#98B1C5]`}
                            onClick={() => handleLinkClick('freelancerlist')}
                        >
                            <Link to='/'>Find Freelancer</Link>
                        </li>
                    </>
                )}
            </ul>

            <div className="flex gap-4 items-center">
                <button
                    className={`p-2 rounded-full border-2 ${theme === 'dark' ? 'border-[#CCCCCC] text-white' : 'border-[#2F4D6F] text-black'}`}
                    onClick={toggleTheme}
                >
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>

                {!isLoggedIn && (
                    <>
                        <span className="cursor-pointer text-lg font-bold hover:text-[#E2511A]">
                            <Link to='/signup'>Sign Up</Link>
                        </span>
                        <span className="cursor-pointer text-lg font-bold hover:text-[#E2511A]">
                            <Link to='/login'>Login</Link>
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
