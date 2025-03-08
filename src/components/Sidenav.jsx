import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoMenu } from 'react-icons/io5';
import { FaHome, FaMapMarkerAlt, FaMoon, FaSun, FaUserPlus, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard, MdWork } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';

export default function Sidenav() {
    const [open, setOpen] = React.useState(false);
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    
    const isLoggedIn = !!localStorage.getItem('users'); 

    const toggleDrawer = (newOpen) => (event) => {
        if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(newOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('users');
        navigate('/login');
    };

    const items = [
        { page: 'Home', icon: FaHome, link: '/' },
        { page: 'Dashboard', icon: MdDashboard, link: '/dashboard', protected: true },
        { page: 'Find Job', icon: MdWork, link: '/joblisting', protected: true },
        { page: 'Find Freelancer', icon: FaMapMarkerAlt, link: '/freelancerlist', protected: true },
        !isLoggedIn && { page: 'Sign Up', icon: FaUserPlus, link: '/signup' },
        !isLoggedIn && { page: 'Login', icon: FaSignInAlt, link: '/login' },
        isLoggedIn && { page: 'Logout', icon: FaSignOutAlt, action: handleLogout },
    ].filter(Boolean);

    return (
        <div className={`md:hidden flex items-center justify-between w-full fixed top-0 left-0 z-50 p-4
        ${theme === 'dark' ? 'bg-black bg-opacity-50' : 'bg-opacity-50'} 
        backdrop-blur-md shadow-lg rounded-lg`}>
            
            {/* Menu Icon */}
            <IoMenu onClick={toggleDrawer(true)} className="cursor-pointer text-2xl" />

            {/* Sidebar Drawer */}
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        width: 250,
                        height: '100%',
                        backgroundColor: theme === 'dark' ? '#121212' : '#45b280',
                        color: 'white',
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {items.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                {item.action ? (
                                    <ListItemButton onClick={item.action}>
                                        <ListItemIcon>
                                            <item.icon className="text-[#FFA500] size-7" />
                                        </ListItemIcon>
                                        <ListItemText primary={item.page} />
                                    </ListItemButton>
                                ) : (
                                    <Link to={item.link} className="w-full">
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <item.icon className="text-[#FFA500] size-7" />
                                            </ListItemIcon>
                                            <ListItemText primary={item.page} />
                                        </ListItemButton>
                                    </Link>
                                )}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Logo */}
            <img src="/images/logo.jpeg" alt="Logo" className="h-10 rounded-xl" />

            {/* Theme Toggle Button */}
            <button
                className={`p-2 rounded-full border-2 border-white bg-transparent ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                onClick={toggleTheme}
            >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
}
