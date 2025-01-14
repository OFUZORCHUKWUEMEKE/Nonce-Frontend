import React from 'react';
import DashboardLayout from '../components/Layout';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { TableDemo } from '@/components/TableDemo';
import TransactionCard from '@/components/TransactionsCard';
import DashboardCard from '@/components/DashboardCard';
type Props = {}

const Transactions = (props: Props) => {
    return (
        <DashboardLayout>
            <div className='py-10 px-20 w-full'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-medium text-[33.6px] text-white'>Transactions</h2>
                    <div className='flex items-center space-x-2'>
                        <input placeholder='' className='rounded-md py-3 px-6 outline-none bg-transparent border border-[#D9D9D9]  text-white' />
                        <button className='bg-white rounded-md py-3 px-6 md:block hidden text-black font-medium'>Search</button>
                    </div>
                </div>
                <div className='py-4 w-[341px]'>
                    <DashboardCard name="Total Transactions" description='10.1% since last year' number={2000}/>
                </div>
                <div className='py-10'>
                    <div className='flex justify-between items-center gap-4 space-x-4'>
                        <div className="flex-[60%]">
                            <TransactionCard name="Pay In" description='You have 100+ Pay-Ins since last month'/>
                        </div>
                        <div className="flex-[40%]">
                            <TransactionCard name='Pay Out' description='You have 100+ Pay-Outs since last month'/>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Transactions