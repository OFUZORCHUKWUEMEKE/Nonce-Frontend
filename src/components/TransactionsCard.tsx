import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
const TransactionCard = ({ name,description }: { name: string,description:string }) => {
    return (
        <Card className='bg-black border-none'>
            <CardHeader className='text-white'>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
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
    )

}

export default TransactionCard;