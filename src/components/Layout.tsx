import React from 'react'
import Sidebar from './Sidebar';
import { AppSidebar } from './sidebar/app-sidebar';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';

const DashboardLayout = ({
    children,
}: { children: React.ReactNode }) => {
    return (
        <div className='min-w-full'>
            <SidebarProvider>
                <div className='flex w-full'>
                    <AppSidebar />
                    <main className='flex flex-1 bg-[#09090b]'>
                        {children}
                    </main>
                </div>

            </SidebarProvider>
        </div>

    )
}

export default DashboardLayout;