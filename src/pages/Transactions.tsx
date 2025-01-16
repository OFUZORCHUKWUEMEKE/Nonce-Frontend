import React from 'react';
import DashboardLayout from '../components/Layout';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { TableDemo } from '@/components/TableDemo';
import TransactionCard from '@/components/TransactionsCard';
import DashboardCard from '@/components/DashboardCard';
import { ArrowUp, Bell, House, CarFront, Plane, ShoppingCart,Plus } from 'lucide-react';

import BottomNavigation from '@/components/BottomNav';
type Props = {}

const Transactions = (props: Props) => {
    const transactiondata = [
        { name: 'New Home', date: "Wed,Sep 18 2025", price: "3000", other: "2 days left", icon: House },
        { name: 'New Whip', date: "Thur, Feb 26 2025", price: "3000", other: "4 days left", icon: CarFront },
        { name: 'Monthly', date: "Mon, Jan 1 2025", price: "4000", other: "7 days left", icon: ShoppingCart },
        { name: 'Trip To Jamaica', date: "Fri, Mar 10 2025", price: "3500", other: "2 days left", icon: Plane },
        { name: 'Monthly', date: "Mon, Jan 1 2025", price: "4000", other: "7 days left", icon: ShoppingCart },
        { name: 'Trip To Jamaica', date: "Fri, Mar 10 2025", price: "3500", other: "2 days left", icon: Plane },
        { name: 'Monthly', date: "Mon, Jan 1 2025", price: "4000", other: "7 days left", icon: ShoppingCart },
        { name: 'Trip To Jamaica', date: "Fri, Mar 10 2025", price: "3500", other: "2 days left", icon: Plane },
        { name: 'Monthly', date: "Mon, Jan 1 2025", price: "4000", other: "7 days left", icon: ShoppingCart },
        { name: 'Trip To Jamaica', date: "Fri, Mar 10 2025", price: "3500", other: "2 days left", icon: Plane }
    ]
    return (
        <DashboardLayout>
            <div className='py-10 px-20 w-full hidden md:block'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-medium text-[33.6px] text-white'>Transactions</h2>
                    <div className='flex items-center space-x-2'>
                        <input placeholder='' className='rounded-md py-3 px-6 outline-none bg-transparent border border-[#D9D9D9]  text-white' />
                        <button className='bg-white rounded-md py-3 px-6 md:block hidden text-black font-medium'>Search</button>
                    </div>
                </div>
                <div className='py-4 w-[341px]'>
                    <DashboardCard name="Total Transactions" description='10.1% since last year' number={2000} />
                </div>
                <div className='py-10'>
                    <div className='flex justify-between items-center gap-4 space-x-4'>
                        <div className="flex-[60%]">
                            <TransactionCard name="Pay In" description='You have 100+ Pay-Ins since last month' />
                        </div>
                        <div className="flex-[40%]">
                            <TransactionCard name='Pay Out' description='You have 100+ Pay-Outs since last month' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='block md:hidden py-4 px-6 w-full'>
                <div className='absolute top-[-70%] right-3 fixed'>
                    <Plus size={30} color="white"/>
                </div>
                <div className="">
                    <h2 className='text-white text-[30px] font-bold'>Transaction</h2>
                    <div className='py-4 '>
                        <h2 className='text-white'>All Time</h2>
                        <div className='flex justify-between items-center py-2'>
                            <div className='flex items-center space-x-1'>
                                <h2 className='text-[35px] text-[#85DA67] font-bold'>$3,500</h2>
                                <ArrowUp color='#85DA67' className='mt-2' />
                            </div>
                            <div className='flex items-center space-x-1'>
                                <h2 className='text-[35px] text-[#993838] font-bold'>$1,500</h2>
                                <ArrowUp color='#993838' className='mt-2' />
                            </div>
                        </div>
                        <div className='pb-8'>
                            {transactiondata.map(({ name, date, price, other, icon: Icon }) => (
                                <div className='py-2 flex justify-between items-center'>
                                    <div className='flex items-center space-x-2'>
                                        <div className='p-2 bg-[#343434] rounded-full'>
                                            <Icon size={28} color='white' />
                                        </div>
                                        <div className='py-1'>
                                            <h2 className='text-white font-medium'>{name}</h2>
                                            <p className='text-[#A8A8A8] text-sm text-light'>{date}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='text-right font-medium text-white'>${price}</h2>
                                        <h2 className='text-right font-medium text-[#A8A8A8] text-sm'>${other}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <BottomNavigation />
            </div>
        </DashboardLayout>
    )
}

export default Transactions