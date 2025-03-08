import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useTheme } from '../../Context/ThemeContext';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { myprojects } from '../data/Projects_data';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Divider, Drawer, Modal, TextField, Button } from '@mui/material';
import { IoMenu } from 'react-icons/io5';

const options = [
    { name: 'Overview', icon: '' },
    { name: 'Messages', icon: faComments },
    { name: 'My Projects', icon: faLightbulb },
    { name: 'My Biddings', icon: faRectangleList },
    { name: 'Earnings', icon: faMoneyBillTrendUp },
    { name: 'Manage Projects', icon: faCalendar },
];

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function Myprojects({ handlepage, page }) {
    const { theme, toggleTheme } = useTheme();
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState(myprojects);
    const [modalOpen, setModalOpen] = useState(false);
    const [newProject, setNewProject] = useState({ task: '', name: '', deadline: '' });

    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleAddProject = () => {
        setProjects([...projects, { ...newProject, status: 'ongoing', date: new Date().toLocaleDateString() }]);
        setNewProject({ task: '', name: '', deadline: '' });
        setModalOpen(false);
    };

    // Color cycle for cards
    const colors = ["#000000", "#E2511A", "#CCCCCC"];

    return (
        <div className='py-6 px-8 w-screen md:w-[82%] overflow-y-auto'>
            <div className={`w-full flex md:flex-row justify-between items-center gap-4 md:gap-8 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>
                <div className='flex items-center gap-5'>
                    <IoMenu onClick={() => setOpen(true)} className="md:hidden cursor-pointer text-2xl" />
                    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                        <Box sx={{ width: 250, backgroundColor: theme === 'dark' ? '#089451' : 'black', height: '100%' }}>
                            {options.map((item, index) => (
                                <motion.div key={index} onClick={() => handlepage(item.name)}
                                    className={`flex items-center gap-3 px-4 py-2 rounded-lg ${page === item.name ? 'bg-gradient-to-r from-[#40AB7A] to-[#0A673B]' : ''}`}>
                                    {item.icon && <FontAwesomeIcon icon={item.icon} style={{ color: '#FFA500' }} className='size-6' />}
                                    <h1 className='text-white text-xl font-bold'>{item.name}</h1>
                                </motion.div>
                            ))}
                            <Divider style={{ backgroundColor: 'black' }} />
                        </Box>
                    </Drawer>
                    <img 
    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"  
    alt="Avatar" 
    className='rounded-full h-10' 
/>

                    <h1 className='text-2xl font-bold hidden md:block'>Yash Rawat</h1>
                </div>
                <div className='flex items-center gap-4 md:w-[30%] justify-evenly'>
                    <button className={`p-2 rounded-full border-2 ${theme === 'dark' ? 'text-white border-white' : 'text-black border-black'}`} onClick={toggleTheme}>
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                    <FontAwesomeIcon icon={faBell} className='text-xl hidden md:block' />
                    <button onClick={() => setModalOpen(true)} className='text-white font-semibold text-lg bg-[#E2511A] px-3 py-2 rounded-lg'>+ Add Project</button>
                </div>
            </div>

            <h1 className={`${theme === 'dark' ? 'text-white' : 'text-[#000000]'} text-4xl font-bold mb-2 mt-7`}>My Projects</h1>
            <p className='text-[#757575] text-lg font-semibold mb-5'>Manage your ongoing and completed work in one place.</p>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
                    <Tab label="All Projects" />
                    <Tab label="Ongoing Projects" />
                    <Tab label="Completed Projects" />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {projects.map((item, index) => {
        const gradients = [
            "linear-gradient(to right, #000000, #333333)",  // Black Gradient
            "linear-gradient(to right, #E2511A, #B8430D)",  // Orange Gradient
            "linear-gradient(to right, #808080, #CCCCCC)",  // Gray Gradient
        ];

        return (
            <div key={index} 
                className="rounded-lg p-6 text-white shadow-md hover:scale-105 transition-transform"
                style={{ background: gradients[index % 3] }}>
                
                <h1 className="text-sm bg-white text-black w-fit px-3 py-1 rounded-full">{item.date}</h1>
                <h1 className="text-lg mt-2 font-semibold">{item.name}</h1>
                <h1 className="text-2xl font-bold">{item.task}</h1>
                <p className="text-xs mt-1">🕒 Deadline: {item.deadline}</p>
            </div>
        );
    })}
</motion.div>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.filter(proj => proj.status === 'ongoing').map((item, index) => (
            <div key={index} className="rounded-lg p-6 text-white shadow-md hover:scale-105 transition-transform"
                style={{ background: "linear-gradient(to right, #E2511A, #B8430D)" }}>
                <h1 className="text-sm bg-white text-black w-fit px-3 py-1 rounded-full">{item.date}</h1>
                <h1 className="text-lg mt-2 font-semibold">{item.name}</h1>
                <h1 className="text-2xl font-bold">{item.task}</h1>
                <p className="text-xs mt-1">🕒 Deadline: {item.deadline}</p>
            </div>
        ))}
    </motion.div>
</CustomTabPanel>

<CustomTabPanel value={value} index={2}>
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.filter(proj => proj.status === 'completed').map((item, index) => (
            <div key={index} className="rounded-lg p-6 text-white shadow-md hover:scale-105 transition-transform"
                style={{ background: "linear-gradient(to right, #808080, #CCCCCC)" }}>
                <h1 className="text-sm bg-white text-black w-fit px-3 py-1 rounded-full">{item.date}</h1>
                <h1 className="text-lg mt-2 font-semibold">{item.name}</h1>
                <h1 className="text-2xl font-bold">{item.task}</h1>
                <p className="text-xs mt-1">🕒 Deadline: {item.deadline}</p>
            </div>
        ))}
    </motion.div>
</CustomTabPanel>

            {/* Updated Modal */}
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
    <Box className="bg-[white] p-6 rounded-lg shadow-lg w-96 mx-auto mt-32">
        <h2 className="text-xl font-bold mb-4 text-center text-[#E2511A]">Add New Project</h2>

        <TextField 
    label="Project Name" 
    fullWidth 
    value={newProject.name} 
    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} 
    sx={{ marginBottom: '10px' }} // Added padding & spacing
/>

        <TextField 
            label="Task" 
            fullWidth 
            value={newProject.task} 
            onChange={(e) => setNewProject({ ...newProject, task: e.target.value })} 
            sx={{ marginBottom: '10px' }}  // Increased spacing
        />

        <TextField 
            label="Deadline" 
            type="date" 
            fullWidth 
            value={newProject.deadline} 
            onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })} 
            InputLabelProps={{ shrink: true }} // Removes placeholder
            sx={{ marginBottom: '10px' }}  // Increased spacing
        />

        <Button 
            variant="contained" 
            sx={{ backgroundColor: '#E2511A', '&:hover': { backgroundColor: '#E2511A' } }} 
            fullWidth 
            onClick={handleAddProject}
        >
            Add Project
        </Button>
    </Box>
</Modal>

        </div>
    );
}

export default Myprojects;


