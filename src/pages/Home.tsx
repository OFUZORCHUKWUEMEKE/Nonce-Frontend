import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Groups2Icon from '@mui/icons-material/Groups2';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';

const Home = () => {
    return (
        <>
            <div className='bg-[#FC4B37] min-h-screen'>
                <div className='py-4 text-white max-w-[1280px] mx-auto'>
                    <nav className='flex w-4/5 items-center mx-auto justify-between w-full'>
                        <h3 className='cursor-pointer'>Nonce</h3>
                        <div className='flex space-x-16'>
                            <h3 className='cursor-pointer'>Home</h3>
                            <h3 className='cursor-pointer'>Blog</h3>
                            <h3 className='cursor-pointer'>About</h3>
                            <h3 className='cursor-pointer'>Contact</h3>
                        </div>
                        <button className='bg-white py-3 px-6 rounded-[100px] text-black font-medium'>Get Started</button>
                    </nav>
                    <div className='py-20 mt-6 w-[70%] mx-auto'>
                        <h1 className='text-[100px] text-center text-white font-bold'>The Better Way to Save & Invest</h1>
                    </div>
                    <div className='py-3'>
                        <img src='/src/assets/Dashboard Image.png' />
                    </div>
                </div>
            </div>
            <div className='py-4 bg-white'>
                <div className='py-3 mt-10 gap-20 flex justify-between  items-center max-w-[1280px] mx-auto'>
                    <div className='space-y-6 flex-1'>
                        <h2 className='text-[65px] leading-[70px] font-bold'>Best way to save on Solana</h2>
                        <p className='w-3/5 text-[#1D1D1D]'>Best way to store up your solana for a
                            period of time. Explore different savings
                            options </p>
                        <button className='bg-[#FC4B37] text-white rounded-[100px] px-6 py-3'>Get Started</button>
                    </div>
                    <img src='/src/assets/Save.png' className='w-[500px] h-[600px]' />
                </div>
                <div className='py-3 mt-10 gap-20 flex justify-between items-center  max-w-[1280px] mx-auto'>
                    <img src='/src/assets/Solanaa.png' className='w-[500px] h-[600px]' />
                    <div className='space-y-6 flex-1'>
                        <h2 className='text-[65px] leading-[85px] font-bold text-right'>What is Nonce ?</h2>
                        <p className='text-[#1D1D1D] text-right'>Nonce is a Crypto Savings Platform , powered by solana,
                            that helps users store up there SOL or USDC. Nonce offers
                            various savings plan to users to help boost the savings
                            culture and also boost crypto adoption </p>
                    </div>
                </div>
                <div className='py-6 max-w-[1280px] mx-auto'>
                    <div>
                        <h2 className='font-bold text-center text-[65px]'>Explore Different Savings Offers</h2>
                        <div className='py-6 flex items-center justify-between'>
                            <div className='border border-[hsl(6,97%,60%)] rounded-[25px] py-2 w-[420px] h-[340px] cursor-pointer'>
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
                            <div className='border border-[#FC4B37] rounded-[25px] py-2 w-[420px] h-[340px] cursor-pointer'>
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
                            <div className='border border-[#FC4B37] rounded-[25px] py-2 w-[420px] h-[340px] cursor-pointer'>
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
                    <div className="bg-black rounded-[25px] w-full h-[750px] flex items-center">
                        <div className='flex justify-between items-center'>
                            <img src="/src/assets/Banners.png" alt="" className='flex-1' />
                            <div className='flex-1'>
                                <h2 className='text-[80px] text-white leading-[80px] font-bold'>Every crypto saved is a step towards tomorrow's prosperity</h2>
                                <div className='py-3 mt-[50px]'>
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
                <div className='max-w-[1280px] mx-auto'>
                    <div className='flex justify-between items-start py-10 text-white'>
                        <div>
                            <h2 className='font-bold text-4xl cursor-pointer'>NONCE</h2>
                        </div>
                        <div className='space-y-16'>
                            <h2 className='font-bold text-2xl'>Company</h2>
                            <h2 className='text-md'>Company</h2>
                            <h2 className='text-md'>Blog</h2>
                            <h2 className='text-md'>Career</h2>
                        </div>
                        <div className='space-y-16'>
                            <h2 className='font-bold text-2xl'>Contact</h2>
                            <h2 className='text-md'>+234 70 3622 6327</h2>
                            <h2 className='text-md'>Twitter</h2>
                            <h2 className='text-md'>LinkedIn</h2>
                        </div>
                        <div className='space-y-16'>
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

