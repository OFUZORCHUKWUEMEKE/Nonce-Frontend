import React from "react";
import { cn } from "@/lib/utils";

const DashboardCard = ({ name, description, number }: { name: string, description: string, number: number }) => {

    return (
        <div className='border border-white bg-black space-y-3 py-4 px-3 rounded-xl cursor-pointer'>
            <h2 className='text-white font-bold'>{name}</h2>
            <h1 className='text-[30px] font-bold text-white'>${number}</h1>
            <div className='py-1'>
                <p className='text-[#C2C2C2] text-[14px]'>{description}</p>
            </div>
        </div>
    )

}

export default DashboardCard