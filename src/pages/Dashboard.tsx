import React from 'react'
import DashboardLayout from '../components/Layout'
import { AccordionSummary, IconButton } from '@mui/material'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Charts } from '@/components/charts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
          <div className='flex items-center space-x-6'>
            <div className='border-none bg-black space-y-3 py-4 px-3 w-[280.52px] h-[140.4px] rounded-xl cursor-pointer'>
              <h2 className='text-white font-bold'>Total Savings</h2>
              <h1 className='text-[30px] font-bold text-white'>$2,000</h1>
              <div className='py-1'>
                <p className='text-[#C2C2C2] text-[14px]'>10.1% since last year</p>
              </div>
            </div>
            <div className='border-none bg-black space-y-3 py-4 px-3 w-[280.52px] h-[140.4px] rounded-xl cursor-pointer'>
              <h2 className='text-white font-bold'>Number of Savings</h2>
              <h1 className='text-[30px] font-bold text-white'>4</h1>
              <div className='py-1'>
                <p className='text-[#C2C2C2] text-[14px]'>6.1% since last year</p>
              </div>
            </div>
            <div className='border-none bg-black space-y-3 py-4 px-3 w-[280.52px] h-[140.4px] rounded-xl cursor-pointer'>
              <h2 className='text-white font-bold'>Active Savings</h2>
              <h1 className='text-[30px] font-bold text-white'>+25</h1>
              <div className='py-1'>
                <p className='text-[#C2C2C2] text-[14px]'>6.1% since last week</p>
              </div>
            </div>
          </div>
        </div>
        <div className='py-2'>
          <div className='flex gap-10'>
            <div className='flex-[60%]'>
              <Charts />
            </div>
            <div className='flex-[40%]'>
              <Card className='bg-black border-none'>
                <CardHeader className='text-white'>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>You have 100+ transactions since last month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-6'>
                    <div className='flex justify-between items-center cursor-pointer'>
                      <div>
                        <h2 className='text-white text-xl font-bold'>Daily Savings</h2>
                        <p className='text-white text-sm'>0x39820x0awedc343dd</p>
                      </div>
                      <div>
                        <h2 className='text-[#C6C2C2] text-[18px] font-bold'>-$1,200</h2>
                        <p className='font-light text-sm text-right text-[#C6C2C2]'>USDT(sol)</p>
                      </div>

                    </div>
                    <div className='flex justify-between items-center cursor-pointer'>
                      <div>
                        <h2 className='text-white text-xl font-bold'>Daily Savings</h2>
                        <p className='text-white text-sm'>0x39820x0awedc343dd</p>
                      </div>
                      <div>
                        <h2 className='text-[#C6C2C2] text-[18px] font-bold'>-$1,200</h2>
                        <p className='font-light text-sm text-right text-[#C6C2C2]'>ETH(base)</p>
                      </div>
                    </div>
                    <div className='flex justify-between items-center cursor-pointer'>
                      <div>
                        <h2 className='text-white text-xl font-bold'>House savings</h2>
                        <p className='text-white text-sm'>0x39820x0awedc343dd</p>
                      </div>
                      <div>
                        <h2 className='text-[#C6C2C2] text-[18px] font-bold'>-$1,200</h2>
                        <p className='font-light text-sm text-right text-[#C6C2C2]'>USDT(sui)</p>
                      </div>
                    </div>
                    <div className='flex justify-between items-center cursor-pointer'>
                      <div>
                        <h2 className='text-white text-xl font-bold'>Monthly Savings</h2>
                        <p className='text-white text-sm'>0x39820x0awedc343dd</p>
                      </div>
                      <div>
                        <h2 className='text-[#C6C2C2] text-[18px] font-bold'>-$1,200</h2>
                        <p className='font-light text-sm text-right text-[#C6C2C2]'>USDT(sui)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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