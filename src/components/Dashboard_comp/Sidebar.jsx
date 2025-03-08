import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList, faGauge } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@mui/material';
import { IoLogOut, IoMenu } from 'react-icons/io5';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { useTheme } from '../../Context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const options = [
    { name: 'Overview', icon: faGauge },
    { name: 'Messages', icon: faComments },
    { name: 'My Projects', icon: faLightbulb },
    { name: 'My Biddings', icon: faRectangleList },
    { name: 'Earnings', icon: faMoneyBillTrendUp },
    { name: 'Manage Projects', icon: faCalendar },
];

export default function Sidenav({ handlepage, page }) {
    const [open, setOpen] = React.useState(false);
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('users');
        navigate('/', { replace: true });
    }

    const toggleDrawer = (newOpen) => (event) => {
        if (event && (event.type === 'keydown') && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <div className='flex flex-col mt-10 gap-6 cursor-pointer'>
                {options.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 50,
                            delay: index * 0.2,
                        }}
                        onClick={() => { handlepage(item.name) }}
                        className={`flex items-center gap-3 ${(theme === 'dark' && page === item.name) ? 'bg-black' : (page === item.name ? 'bg-gradient-to-r from-[#E2511A] to-[#F28C56]' : '')} px-4 py-2 rounded-lg`}
                    >
                        {item.icon && <FontAwesomeIcon icon={item.icon} style={{ color: '#E2511A' }} className='size-6' />}
                        <h1 className='text-white text-xl font-bold'>{item.name}</h1>
                    </motion.div>
                ))}
                <Divider style={{ backgroundColor: 'white' }} />
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 50,
                        delay: 0.2,
                    }}
                    onClick={handleLogout}
                    className={`flex items-center gap-3 ${(theme === 'dark') ? 'bg-black' : ''} px-4 py-2 rounded-lg`}
                >
                    <IoLogOut className='size-6 text-[#E2511A]' />
                    <h1 className='text-xl text-white font-bold'>Logout</h1>
                </motion.div>
            </div>
        </Box>
    );

    return (
        <>
            {/* Desktop View */}
            <div className={`hidden md:flex bg-black w-[20%] justify-center h-full`}>
                <div className='w-[70%] flex flex-col mt-10 gap-6 cursor-pointer'>
                    {options.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 50,
                                delay: index * 0.2,
                            }}
                            onClick={() => { handlepage(item.name) }}
                            className={`flex items-center gap-3 ${(theme === 'dark' && page === item.name) ? 'bg-black' : (page === item.name ? 'bg-gradient-to-r from-[#E2511A] to-[#F28C56]' : '')} px-4 py-2 rounded-lg`}
                        >
                            {item.icon && <FontAwesomeIcon icon={item.icon} style={{ color: '#E2511A' }} className='size-6' />}
                            <h1 className='text-white text-xl font-bold'>{item.name}</h1>
                        </motion.div>
                    ))}
                    <Divider style={{ backgroundColor: 'white' }} />
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 50,
                            delay: 0.2,
                        }}
                        onClick={handleLogout}
                        className={`flex items-center gap-3 ${(theme === 'dark') ? 'bg-black' : ''} px-4 py-2 rounded-lg`}
                    >
                        <IoLogOut className='size-6 text-[#E2511A]' />
                        <h1 className='text-xl text-white font-bold'>Logout</h1>
                    </motion.div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
                <IoMenu onClick={toggleDrawer(true)} className="text-2xl cursor-pointer" />
                <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>
        </>
    );
}
