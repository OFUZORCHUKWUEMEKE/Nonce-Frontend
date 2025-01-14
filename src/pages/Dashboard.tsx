import React from 'react'
import DashboardLayout from '../components/Layout'
import { AccordionSummary, IconButton } from '@mui/material'
import { SidebarTrigger } from '@/components/ui/sidebar'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <DashboardLayout>
      <div className='px-20 py-12'>
        <div className='flex justify-between items-start'>
          {/* <SidebarTrigger/> */}
          <div className='space-y-2'>
            <h2 className='text-[30px] font-bold'>Welcome Back Ofuzor</h2>
            <p className='text-[#C2C2C2] font-light'>December 2024</p>
          </div>
          <button className='bg-[#FC4B37] py-3 px-6 md:block hidden text-white font-medium'>Get Started</button>
        </div>
        <div className='py-10'>
          <div className='flex items-center space-x-6'>
            <div className='bg-[#D0E2E3] space-y-3 py-4 px-3 w-[280.52px] h-[190.4px] rounded-xl cursor-pointer'>
              <h2>Total Savings</h2>
              <h1 className='text-[50px] font-bold'>$2,000</h1>
            </div>
            <div className='bg-[#F5F3EC] space-y-3 py-4 px-3 w-[280.52px] h-[190.4px] rounded-xl cursor-pointer'>
              <h2>Number of Savings</h2>
              <h1 className='text-[50px] font-bold'>4</h1>
            </div>
          </div>
        </div>
        <div className='py-5'>
          <h2 className='font-medium text-[33.6px] py-4'>Recent Transactions</h2>
          <div className='py-3 space-y-8'>
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
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard;