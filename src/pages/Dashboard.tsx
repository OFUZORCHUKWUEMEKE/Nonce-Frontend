import React from 'react'
import DashboardLayout from '../components/Layout'
import { AccordionSummary, IconButton } from '@mui/material'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Charts } from '@/components/charts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import TransactionCard from '@/components/TransactionsCard'
import DashboardCard from '@/components/DashboardCard'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from 'lucide-react';
import BottomNavigation from '@/components/BottomNav'
import { Separator } from '@/components/ui/separator'


type Props = {}

const Dashboard = (props: Props) => {
  return (
    <DashboardLayout>
      <div className='px-10 py-10 w-full hidden md:block'>
        <div className='flex justify-between items-start'>

          <div className='space-x-2 items-start flex'>
            <SidebarTrigger className='mt-2 text-white' />
            <div className='space-y-1'>
              <h2 className='text-[30px] text-white font-bold'>Welcome Back Ofuzor</h2>
              <p className='text-[#C2C2C2] font-light'>December 2024</p>
            </div>
          </div>

          <button className='bg-white py-3 px-6 md:block hidden rounded-lg text-black font-medium'>Create Savings</button>
        </div>
        <div className='py-10'>
          <div className='grid grid-cols-3 gap-6 items-center space-x-6'>
            <DashboardCard name='Total Savings' description='10.1% since last year' number={2000} />
            <DashboardCard name="Number of Savings" description='6.1% since last year' number={4} />
            <DashboardCard name='Active Savings' description='61% since last week' number={25} />
          </div>
        </div>
        <div className='py-2'>
          <div className='flex gap-10'>
            <div className='flex-[60%]'>
              <Charts />
            </div>
            <div className='flex-[40%]'>
              <TransactionCard name="Recent Transactions" description='You have 100+ transactions since last month' />
            </div>
          </div>
        </div>
      </div>
      <div className='py-4 px-6 w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-1'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>E0</AvatarFallback>
            </Avatar>
            <div className=' text-white'>
              <h3 className='font-bold'>Ofuzor Emeke</h3>
              <p className='text-sm'>0Xhsh28822...</p>
            </div>
          </div>
          <div className='cursor-pointer'>
            <Bell size={28} color='white' />
          </div>
        </div>
        <div className='py-2'>
          <Separator />
        </div>
        <div className='py-2'>
          <div className=''>
            <p className='text-white text-sm'>Your balance is <span className="text-[#25DB25]">+10.2%</span></p>
            <div className='py-2'>
              <h2 className='text-[45px] font-bold text-white'>$ 8,350.00</h2>
              <p className='text-white text-sm'>You have saved <span className="text-[#FC4B37]">2500</span> this month</p>
            </div>
          </div>
          <div className='py-2'>
            <Charts />
          </div>
        </div>
        <BottomNavigation />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard;