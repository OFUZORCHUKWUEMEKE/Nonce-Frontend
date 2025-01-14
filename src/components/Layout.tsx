import React from 'react'
import Sidebar from './Sidebar';
import { AppSidebar } from './sidebar/app-sidebar';
import { SidebarProvider } from './ui/sidebar';

const DashboardLayout = ({
    children,
}: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <main className='max-w-[100vw] flex'>
                <div className='w-[20%] hidden md:block'>
                    {/* <Sidebar /> */}
                    <AppSidebar />
                </div>
                <main className='md:w-[80%] w-full'>
                    {children}
                </main>
            </main>
        </SidebarProvider>

    )
}

export default DashboardLayout;