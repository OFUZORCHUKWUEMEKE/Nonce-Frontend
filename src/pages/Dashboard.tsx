import React from 'react'
import DashboardLayout from '../components/Layout'
import { AccordionSummary, IconButton } from '@mui/material'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Charts } from '@/components/charts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import TransactionCard from '@/components/TransactionsCard'
import DashboardCard from '@/components/DashboardCard'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <DashboardLayout>
      <div className='px-10 py-10 w-full'>
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
            <DashboardCard name='Total Savings' description='10.1% since last year' number={2000}/>
            <DashboardCard name="Number of Savings" description='6.1% since last year' number={4}/>
            <DashboardCard name='Active Savings' description='61% since last week' number={25}/>
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

          {/* <div className='py-3 space-y-8'>
            <div className='flex space-x-2 items-center justify-between cursor-pointer'>
              <div className='flex space-x-2 items-center'>
                <div className='w-[58.14px] h-[58.14px] rounded-full bg-[#E9E5E5]'>
                  <IconButton>
                    <AccordionSummary />
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
                <div className='w-[58.14px] h-[58.14px] rounded-full bg-[#E9E5E5]'>
                  <IconButton>
                    <AccordionSummary />
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
                <div className='w-[58.14px] h-[58.14px] rounded-full bg-[#E9E5E5]'>
                  <IconButton>
                    <AccordionSummary />
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
                <div className='w-[58.14px] h-[58.14px] rounded-full bg-[#E9E5E5]'>
                  <IconButton>
                    <AccordionSummary />
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
                <div className='w-[58.14px] h-[58.14px] rounded-full bg-[#E9E5E5]'>
                  <IconButton>
                    <AccordionSummary />
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
          </div> */}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard;