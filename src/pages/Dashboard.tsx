import React from 'react'
import DashboardLayout from '../components/Layout'
import { AccordionSummary, IconButton } from '@mui/material'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Charts } from '@/components/charts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import TransactionCard from '@/components/TransactionsCard'
import DashboardCard from '@/components/DashboardCard'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, House, CarFront, Plane, ShoppingCart } from 'lucide-react';
import BottomNavigation from '@/components/BottomNav'
import { Separator } from '@/components/ui/separator'
import { useAppKitAccount } from '@reown/appkit/react'


type Props = {}

const Dashboard = (props: Props) => {
  const { isConnected, address } = useAppKitAccount();

  const transactiondata = [
    { name: 'New Home', date: "Wed,Sep 18 2025", price: "3000", other: "2 days left", icon: House },
    { name: 'New Whip', date: "Thur, Feb 26 2025", price: "3000", other: "4 days left", icon: CarFront },
    { name: 'Monthly', date: "Mon, Jan 1 2025", price: "4000", other: "7 days left", icon: ShoppingCart },
    { name: 'Trip To Jamaica', date: "Fri, Mar 10 2025", price: "3500", other: "2 days left", icon: Plane },
    { name: 'Monthly', date: "Mon, Jan 1 2025", price: "4000", other: "7 days left", icon: ShoppingCart },
    { name: 'Trip To Jamaica', date: "Fri, Mar 10 2025", price: "3500", other: "2 days left", icon: Plane }
  ]
  return (
    <DashboardLayout>
      <div className='px-10 py-10 w-full hidden md:block'>
        <div className='flex justify-between items-start'>

          <div className='space-x-2 items-start flex'>
            <SidebarTrigger className='mt-2 text-white' />
            <div className='space-y-1'>
              <h2 className='text-[30px] text-white font-bold'>Welcome</h2>
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
      <div className='py-4 px-6 w-full block md:hidden'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-1'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>E0</AvatarFallback>
            </Avatar>
            <div className=' text-white'>
              <h3 className='font-bold'>Ofuzor Emeke</h3>
              <p className='text-sm'>{address}</p>
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
            <div className='py-2'>
              <div className='flex justify-between items-center'>
                <h2 className="text-white">History</h2>
                <h2 className='text-white'>View all</h2>
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
        </div>
        <BottomNavigation />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard;