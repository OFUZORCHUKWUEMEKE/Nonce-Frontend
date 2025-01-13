import React from 'react';
import DashboardLayout from '../components/Layout';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
type Props = {}

const Transactions = (props: Props) => {
    return (
        <DashboardLayout>
            <div className='py-16 px-20'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-medium text-[33.6px] '>Transactions</h2>
                    <div className='flex items-center space-x-2'>
                        <input placeholder='' className='border-[#D9D9D9] border-2 rounded-md py-2 px-10 outline-none bg-white' />
                        <button className='bg-[#FC4B37] rounded-md py-3 px-6 md:block hidden text-white font-medium'>Search</button>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='py-3 space-y-8'>
                        <div className='flex space-x-2 items-center justify-between cursor-pointer'>
                            <div className='flex space-x-2 items-center'>
                                <div className='w-[48.14px] h-[48.14px] flex items-center justify-center rounded-full bg-[#E9E5E5]'>
                                    <IconButton>
                                        <ArrowUpwardIcon className="text-[#2BD92B]" />
                                    </IconButton>
                                </div>
                                <div className='space-y-2'>
                                    <h2 className='font-bold text-xl'>0x3D89068s...</h2>
                                    <p className='font-light text-[#A7A2A2]'>Dec 10 , 2024  19:32</p>
                                </div>
                            </div>
                            <div>
                                <p>200 USDC</p>
                            </div>
                            <div>
                                <h2 className='font-bold text-[#FC4B37]'>PRICE LOCKED</h2>
                            </div>
                            <div>
                                <button className='bg-[#D6FFD4] rounded-[145.35px] text-[#39C277] py-1 px-3'>success</button>
                            </div>
                        </div>
                        <div className='flex space-x-2 items-center justify-between cursor-pointer'>
                            <div className='flex space-x-2 items-center'>
                                <div className='w-[48.14px] h-[48.14px] flex items-center justify-center rounded-full bg-[#E9E5E5]'>
                                    <IconButton>
                                        <ArrowUpwardIcon className="text-[#2BD92B]" />
                                    </IconButton>
                                </div>
                                <div className='space-y-2'>
                                    <h2 className='font-bold text-xl'>0x3D89068s...</h2>
                                    <p className='font-light text-[#A7A2A2]'>Dec 10 , 2024  19:32</p>
                                </div>
                            </div>
                            <div>
                                <p>200 USDC</p>
                            </div>
                            <div>
                                <h2 className='font-bold text-[#FC4B37]'>PRICE LOCKED</h2>
                            </div>
                            <div>
                                <button className='bg-[#D6FFD4] rounded-[145.35px] text-[#39C277] py-1 px-3'>success</button>
                            </div>
                        </div>
                        <div className='flex space-x-2 items-center justify-between cursor-pointer'>
                            <div className='flex space-x-2 items-center'>
                                <div className='w-[48.14px] h-[48.14px] flex items-center justify-center rounded-full bg-[#E9E5E5]'>
                                    <IconButton>
                                        <ArrowUpwardIcon className="text-[#2BD92B]" />
                                    </IconButton>
                                </div>
                                <div className='space-y-2'>
                                    <h2 className='font-bold text-xl'>0x3D89068s...</h2>
                                    <p className='font-light text-[#A7A2A2]'>Dec 10 , 2024  19:32</p>
                                </div>
                            </div>
                            <div>
                                <p>200 USDC</p>
                            </div>
                            <div>
                                <h2 className='font-bold text-[#FC4B37]'>PRICE LOCKED</h2>
                            </div>
                            <div>
                                <button className='bg-[#D6FFD4] rounded-[145.35px] text-[#39C277] py-1 px-3'>success</button>
                            </div>
                        </div>
                        <div className='flex space-x-2 items-center justify-between cursor-pointer'>
                            <div className='flex space-x-2 items-center'>
                                <div className='w-[48.14px] h-[48.14px] flex items-center justify-center rounded-full bg-[#E9E5E5]'>
                                    <IconButton>
                                        <ArrowUpwardIcon className="text-[#2BD92B]" />
                                    </IconButton>
                                </div>
                                <div className='space-y-2'>
                                    <h2 className='font-bold text-xl'>0x3D89068s...</h2>
                                    <p className='font-light text-[#A7A2A2]'>Dec 10 , 2024  19:32</p>
                                </div>
                            </div>
                            <div>
                                <p>200 USDC</p>
                            </div>
                            <div>
                                <h2 className='font-bold text-[#FC4B37]'>PRICE LOCKED</h2>
                            </div>
                            <div>
                                <button className='bg-[#D6FFD4] rounded-[145.35px] text-[#39C277] py-1 px-3'>success</button>
                            </div>
                        </div>
                        <div className='flex space-x-2 items-center justify-between cursor-pointer'>
                            <div className='flex space-x-2 items-center'>
                                <div className='w-[48.14px] h-[48.14px] rounded-full flex items-center justify-center bg-[#E9E5E5]'>
                                    <IconButton>
                                        <ArrowUpwardIcon className="text-[#2BD92B]" />
                                    </IconButton>
                                </div>
                                <div className='space-y-2'>
                                    <h2 className='font-bold text-xl'>0x3D89068s...</h2>
                                    <p className='font-light text-[#A7A2A2]'>Dec 10 , 2024  19:32</p>
                                </div>
                            </div>
                            <div>
                                <p>200 USDC</p>
                            </div>
                            <div>
                                <h2 className='font-bold text-[#FC4B37]'>PRICE LOCKED</h2>
                            </div>
                            <div>
                                <button className='bg-[#D6FFD4] rounded-[145.35px] text-[#39C277] py-1 px-3'>success</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-4 flex items-center justify-end space-x-5'>
                    <div className='w-8 h-8 cursor-pointer text-white flex justify-center items-center rounded-full bg-[#FC4B37]'>
                        1
                    </div>
                    <div className='w-8 h-8 cursor-pointer text-[#FC4B37] flex justify-center items-center rounded-full bg-white border border-[#FC4B37]'>
                        2
                    </div>
                    <div className='w-8 h-8 cursor-pointer text-[#FC4B37] flex justify-center items-center rounded-full bg-white border border-[#FC4B37]'>
                        3
                    </div>
                    <div className='w-8 h-8 cursor-pointer text-[#FC4B37] flex justify-center items-center rounded-full bg-white border border-[#FC4B37]'>
                        4
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default Transactions