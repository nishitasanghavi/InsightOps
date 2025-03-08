import React from 'react';
import { useTheme } from '../../../Context/ThemeContext';
import { Box, Divider, Drawer, Tooltip } from '@mui/material';
import { IoMenu } from 'react-icons/io5';
import { FaMoon, FaSun, FaHandHoldingUsd } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList, faGauge } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { BsHourglassSplit } from "react-icons/bs";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts';
import { paymentsData2 } from '../../data/OverviewData';
import { earnings, news } from '../../data/Payment';
import { DataGrid } from '@mui/x-data-grid';
import { CheckCircle, HourglassEmpty } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import FinancialHealthScore from './FinancialHealthScore';

const options = [
    { name: 'Overview', icon: faGauge },
    { name: 'Messages', icon: faComments },
    { name: 'My Projects', icon: faLightbulb },
    { name: 'My Biddings', icon: faRectangleList },
    { name: 'Earnings', icon: faMoneyBillTrendUp },
    { name: 'Manage Projects', icon: faCalendar },
];

const calculateFinancialHealth = (income, savings, expenses, taxesPaidOnTime, incomeStability) => {
    const savingsPercentage = (savings / income) * 100;
    const expensesPercentage = (expenses / income) * 100;
    const taxScore = taxesPaidOnTime ? 100 : 0;
    const incomeStabilityScore = incomeStability === 'regular' ? 100 : 50;

    const overallScore = (savingsPercentage * 0.30) + 
                         (expensesPercentage * 0.25) + 
                         (taxScore * 0.20) + 
                         (incomeStabilityScore * 0.25);

    return {
        savingsPercentage,
        expensesPercentage,
        taxScore,
        incomeStabilityScore,
        overallScore,
    };
};

const columns = [
    { field: 'date', headerName: 'Date', width: 180 },
    { field: 'client', headerName: 'Client', width: 250 },
    { field: 'amount', headerName: 'Amount', width: 150, },
    { field: 'project', headerName: 'Project', width: 300 },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        renderCell: (params) => {
            const status = params.value;
            const statusStyles = {
                backgroundColor: status === 'completed' ? '#089451' : '#E2511A', // Green for completed, orange for pending
                color: 'white',
                fontWeight: '600',
                fontSize: '16px',
                padding: '7px 10px',
                borderRadius: '20px',
                textAlign: 'center',
            };
            return <span style={statusStyles}>{status === 'completed' ? <CheckCircle /> : <HourglassEmpty />} {status}</span>;
        }
    }
];

const details = [
    {
        title: 'Total Earnings',
        num: '$15,230',
        icon: FaHandHoldingUsd,
        colour: '#089451'
    },
    {
        title: 'Pending Payments',
        num: '$5,230',
        icon: BsHourglassSplit,
        colour: '#E2511A'
    }
];

function Earnings({ handlepage, page }) {
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = React.useState(false);

    const monthlyIncome = 50000;
    const totalSavings = 20000;
    const monthlyExpenses = 30000;
    const taxesPaidOnTime = true;
    const incomeStability = 'irregular';

    const {
        savingsPercentage,
        expensesPercentage,
        taxScore,
        incomeStabilityScore,
        overallScore
    } = calculateFinancialHealth(monthlyIncome, totalSavings, monthlyExpenses, taxesPaidOnTime, incomeStability);

    const gridStyles = {
        '.MuiDataGrid-columnHeaders': {
            fontSize: '18px',
            fontWeight: '800',
            color: '#000000', // Black header text
            borderBottom: '2px solid #CCCCCC', // Grey border below header
        },
        '.MuiDataGrid-cell': {
            fontSize: '16px',
            fontWeight: '600',
            color: '#000000', // Black for cell text
        },
        '.MuiDataGrid-row': {
            '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.4s ease',
                zIndex: 1,
            }
        }
    };

    const toggleDrawer = (newOpen) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250, backgroundColor: '#000000', height: '100%' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className='flex items-center flex-col mt-10 gap-6 cursor-pointer'>
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
                        className={`flex items-center gap-3 ${(page === item.name) ? 'bg-gradient-to-r from-[#E2511A] to-[#E2511A]' : ''} px-4 py-2 rounded-lg`}
                    >
                        {item.icon && <FontAwesomeIcon icon={item.icon} style={{ color: '#E2511A' }} className='size-6' />}
                        <h1 className='text-white text-xl font-bold'>{item.name}</h1>
                    </motion.div>
                ))}
                <Divider style={{ backgroundColor: '#E2511A' }} />
            </div>
        </Box>
    );

    return (
        <div className='p-4 md:py-6 md:px-8 md:w-[80%] overflow-y-auto no-scrollbar' style={{ backgroundColor: '#FFFFFFF' }}>
            <div className={`w-full flex  md:flex-row justify-between items-center gap-4 md:gap-8 text-black`}>
                <div className='flex items-center gap-5'>
                    <IoMenu onClick={toggleDrawer(true)} className="md:hidden cursor-pointer text-2xl" />
                    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAb1r5jl0fbcSTY0XUJL6_r1V-Gzn3Nh4Yw&s" alt="Avatar" className='rounded-full h-10' />
                    <h1 className='text-2xl font-bold hidden md:block'>Yash Rawat</h1>
                </div>
                <div className='flex items-center gap-4 md:w-[30%] justify-evenly'>
                    <button
                        className={`p-2 rounded-full border-2 bg-transparent ${theme === 'dark' ? 'text-white border-white' : 'text-black border-black'}`}
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                    <FontAwesomeIcon icon={faBell} className='text-xl hidden md:block' />
                    <span className='text-white font-semibold text-lg bg-gradient-to-r from-[#E2511A] to-[#E2511A] px-3 py-2 rounded-lg'><Link to={'/joblisting'}>+ Find a Job</Link></span>
                </div>
            </div>

            <div className='md:flex w-full mt-8 mb-4 gap-2 h-[32rem]'>
                <div className='w-full md:w-1/2'>
                    <h1 className="text-3xl font-bold mb-4">Earnings Overview</h1>
                    <motion.div
                        className='grid grid-cols-2 w-full gap-4 bg-gradient-to-r from-[#E2511A] to-[#FFA500] p-4 rounded-lg'
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.4 } }
                        }}
                    >
                        {details.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`flex flex-col md:flex-row bg-white items-center md:items-center md:justify-around gap-6 px-5 py-3 rounded-lg`}
                                initial={{ opacity: 0, rotateY: -90 }}
                                animate={{ opacity: 1, rotateY: 0 }}
                                transition={{
                                    duration: 0.8,
                                    type: 'spring',
                                    stiffness: 120,
                                    delay: index * 0.4
                                }}
                            >
                                <item.icon style={{ color: item.colour }} className='size-8 md:hidden md:text-4xl' />
                                <div className='flex md:flex-col items-center md:items-start'>
                                    <h1 className='md:text-lg font-medium'>{item.title}</h1>
                                    <h1 className='text-xl md:text-3xl font-bold'>{item.num}</h1>
                                </div>
                                <item.icon style={{ color: item.colour }} className='hidden md:block md:text-4xl' />
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className='w-full mt-5 border-[2px] border-[#CCCCCC] p-3 rounded-lg shadow-xl'>
                        <h1 className="font-bold text-xl mb-3">Revenue Growth</h1>
                        <ResponsiveContainer width="100%" height={250}>
    <LineChart data={paymentsData2}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" tick={{ fontSize: 14, fontWeight: 'bold' }} />
        <YAxis tick={{ fontSize: 14, fontWeight: 'bold' }} />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#E2511A" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
    </LineChart>
</ResponsiveContainer>
                    </div>
                </div>

                <div className='w-full md:w-1/2 px-4 pb-5 border-[#CCCCCC] rounded-lg shadow-xl'>
                    <h1 className='text-black text-2xl font-bold mb-3'>Trending News</h1>
                    <Divider style={{ width: '50%' }} />
                    <div className='overflow-y-auto h-[94%] no-scrollbar'>
                        {news.map((item) => {
                            return <div className='mb-4'>
                                <img src="" alt="" />
                                <div>
                                    <h1 className='truncate text-[#E2511A] text-lg font-bold'>{item.headline}</h1>
                                    <p className={`line-clamp-2 text-lg font-bold ${theme === 'dark' ? 'text-white':''}`}>{item.description}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            <div className='w-full p-4 mt-6'>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={earnings}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        sx={gridStyles}
                        filterModel={{
                            items: [
                                { columnField: 'status', operatorValue: 'contains', value: '' }
                            ],
                        }}
                    />
                </Box>
            </div>

            <section className="w-full sm:w-11/12 md:w-full">
                <FinancialHealthScore />
            </section>
        </div>
    );
}

export default Earnings;
