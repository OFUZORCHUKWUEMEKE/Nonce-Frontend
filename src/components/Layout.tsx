import React from 'react'
import Sidebar from './Sidebar';

const DashboardLayout = ({
    children,
}: { children: React.ReactNode }) => {
    return (
        <main className='max-w-[100vw] flex'>
            <div className='w-[20%] hidden md:block'>
                <Sidebar />
            </div>
            <main className='md:w-[80%] w-full'>
                {children}
            </main>
        </main>
    )
}

export default DashboardLayout;