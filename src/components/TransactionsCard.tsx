import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
const TransactionCard = ({ name, description }: { name: string, description: string }) => {
    const data = [
        { name: "Daily Savings", address: "0x39820x0awedc343dd", amount: 1200, coin: "USDT(SOL)" },
        { name: "Daily Savings", address: "0x39820x0awedc343dd", amount: 2000, coin: "ETH(BASE)" },
        { name: "Daily Savings", address: "0x39820x0awedc343dd", amount: 1200, coin: "USDC(SUI)" },
        { name: "Daily Savings", address: "0x39820x0awedc343dd", amount: 120, coin: "USDT(SOL)" },
        { name: "Daily Savings", address: "0x39820x0awedc343dd", amount: 1200, coin: "USDC(SUI)" },
        { name: "Daily Savings", address: "0x39820x0awedc343dd", amount: 120, coin: "USDT(SOL)" },
    ]
    return (
        <Card className='bg-black border-none'>
            <CardHeader className='text-white'>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='space-y-6'>
                    {data.map(({ name, address, amount, coin }) => (
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div>
                                <h2 className='text-white text-xl font-bold'>{name}</h2>
                                <p className='text-white text-sm'>{address}</p>
                            </div>
                            <div>
                                <h2 className='text-[#C6C2C2] text-[18px] font-bold'>-${amount}</h2>
                                <p className='font-light text-sm text-right text-[#C6C2C2]'>{coin}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )

}

export default TransactionCard;