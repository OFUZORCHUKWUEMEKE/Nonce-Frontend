import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Groups2Icon from '@mui/icons-material/Groups2';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
    return (
        <>
            <div className='bg-[#FC4B37] md:min-h-screen w-full'>
                <div className='py-4 text-white w-[85%] md:max-w-[1280px] mx-auto'>
                    <nav className='flex w-4/5 items-center mx-auto justify-between w-full'>
                        <h3 className='cursor-pointer'>Nonce</h3>
                        <div className='md:flex hidden space-x-16'>
                            <h3 className='cursor-pointer'>Home</h3>
                            <h3 className='cursor-pointer'>Blog</h3>
                            <h3 className='cursor-pointer'>About</h3>
                            <h3 className='cursor-pointer'>Contact</h3>
                        </div>
                        <button className='bg-white py-3 px-6 rounded-[100px] md:block hidden text-black font-medium'>Get Started</button>
                        <div className='md:hidden block'>
                            <IconButton>
                                <MenuIcon fontSize='medium' className="text-white" />
                            </IconButton>
                        </div>
                    </nav>
                    <div className='py-20 mt-6 w-[90%] mx-auto'>
                        <h1 className='md:text-[100px] text-[50px] text-center text-white font-bold'>The Better Way to Save & Invest</h1>
                    </div>
                    <div className='py-3 md:block hidden'>
                        <img src='/src/assets/Dashboard Image.png' />
                    </div>
                </div>
            </div>
            <div className='md:py-4 py-2 bg-white w-[85%] mx-auto'>
                <div className='py-3 md:mt-10 mt-3 md:gap-20 gap-10 flex justify-between flex-col md:flex-row items-center max-w-[1280px] mx-auto'>
                    <div className='md:space-y-6 space-y-3 flex-1'>
                        <h2 className='md:text-[65px] text-[45px] md:leading-[70px] leading-[50px] font-bold'>Best way to save on Solana</h2>
                        <p className='md:w-3/5 w-[90%] text-[#1D1D1D]'>Best way to store up your solana for a
                            period of time. Explore different savings
                            options </p>
                        <button className='bg-[#FC4B37] text-white rounded-[100px] px-6 py-3'>Get Started</button>
                    </div>
                    <img src='/src/assets/Save.png' className='w-[500px] md:h-[600px] h-[350px]' />
                </div>
                <div className='py-3 md:mt-10 mt-1 gap-20 flex justify-between flex-col-reverse items-center  max-w-[1280px] mx-auto flex-col md:flex-row'>
                    <img src='/src/assets/Solanaa.png' className='w-[500px]  md:h-[600px] h-[350px]' />
                    <div className='md:space-y-6 space-x-3 flex-1'>
                        <h2 className='md:text-[65px] text-[45px] leading-[85px] font-bold md:text-right text-left'>What is Nonce ?</h2>
                        <p className='text-[#1D1D1D] md:text-right text-left'>Nonce is a Crypto Savings Platform , powered by solana,
                            that helps users store up there SOL or USDC. Nonce offers
                            various savings plan to users to help boost the savings
                            culture and also boost crypto adoption </p>
                    </div>
                </div>
                <div className='py-6 max-w-[1280px] mx-auto'>
                    <div>
                        <h2 className='font-bold md:text-center md:text-[65px] text-[40px]'>Explore Different Savings Offers</h2>
                        <div className='py-6 grid md:grid-cols-3 gap-3 grid-cols-1'>
                            <div className='border border-[hsl(6,97%,60%)] rounded-[25px] py-2 h-[340px] cursor-pointer '>
                                <div className="text-black p-6 space-y-3">
                                    <IconButton>
                                        <AccessAlarmIcon className="text-[#FC4B37]" fontSize='large' />
                                    </IconButton>
                                    <h2 className='text-[36px] font-bold'>TimeLocked</h2>
                                    <div className='py-2'>
                                        <p className='text-[#4e4e4e]'>Lock up your SOL and USDC for a period  of time , savely and wisely</p>
                                    </div>
                                </div>

                            </div>
                            <div className='border border-[#FC4B37] rounded-[25px] py-2 h-[340px] cursor-pointer'>
                                <div className="text-black p-6 space-y-3">
                                    <IconButton>
                                        <AttachMoneyIcon className="text-[#FC4B37]" fontSize='large' />
                                    </IconButton>
                                    <h2 className='text-[36px] font-bold'>Price Locked</h2>
                                    <div className='py-2'>
                                        <p className='text-[#4e4e4e]'>Lock up your SOL and USDC for a period  of time , savely and wisely</p>
                                    </div>
                                </div>
                                {/* <AccessAlarmIcon /> */}

                            </div>
                            <div className='border border-[#FC4B37] rounded-[25px] py-2 h-[340px] cursor-pointer'>
                                {/* <AccessAlarmIcon /> */}
                                <div className="text-black p-6 space-y-3">
                                    <IconButton>
                                        <Groups2Icon className="text-[#FC4B37]" fontSize='large' />
                                    </IconButton>
                                    <h2 className='text-[36px] font-bold'>Group Savings</h2>
                                    <div className='py-2'>
                                        <p className='text-[#4e4e4e]'>Lock up your SOL and USDC for a period  of time , savely and wisely</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-6 max-w-[1280px] mx-auto'>
                    <div className="bg-black rounded-[25px] w-full md:h-[750px] h-[600px] flex items-center">
                        <div className='md:flex justify-between items-center p-3'>
                            <img src="/src/assets/Banners.png" alt="" className='md:flex-1 hidden md:block' />
                            <div className='flex-1'>
                                <h2 className='md:text-[80px] text-[40px] text-white md:leading-[80px] leading-[45px] font-bold'>Every crypto saved is a step towards tomorrow's prosperity</h2>
                                <div className='py-3 md:mt-[50px] mt-[20px]'>
                                    <p className="text-white py-3">Experience the future of digital savings with our innovative blockchain platform that empowers you to lock, grow, and manage your crypto assets securely.</p>
                                    <div className='py-4 flex items-center space-x-1 cursor-pointer'>
                                        <p className='font-bold text-white'>See More</p>
                                        <IconButton>
                                            <ArrowForwardIcon className='text-white' />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-[#FC4B37] py-10'>
                <div className='md:max-w-[1280px] w-[85%] mx-auto'>
                    <div className='grid md:grid-cols-4 grid-cols-2 text-white gap-10'>
                        <div className='md:col-span-1 col-span-2'>
                            <h2 className='font-bold text-4xl cursor-pointer'>NONCE</h2>
                        </div>
                        <div className='md:space-y-16 space-y-8'>
                            <h2 className='font-bold text-2xl'>Company</h2>
                            <h2 className='text-md'>Company</h2>
                            <h2 className='text-md'>Blog</h2>
                            <h2 className='text-md'>Career</h2>
                        </div>
                        <div className='md:space-y-16 space-y-8'>
                            <h2 className='font-bold text-2xl'>Contact</h2>
                            <h2 className='text-md'>+234 70 3622 6327</h2>
                            <h2 className='text-md'>Twitter</h2>
                            <h2 className='text-md'>LinkedIn</h2>
                        </div>
                        <div className='md:space-y-16 space-y-8'>
                            <h2 className='font-bold text-2xl'>Legal</h2>
                            <h2 className='text-md'>Status</h2>
                            <h2 className='text-md'>Privacy</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home;

