import React from 'react'
import Sidebar from './Sidebar';
import { AppSidebar } from './sidebar/app-sidebar';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';

const DashboardLayout = ({
    children,
}: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <div className='flex w-full'>
                <AppSidebar />
                <main className='flex flex-1 w-full'>
                    {children}
                </main>
            </div>

        </SidebarProvider>
    )
}

export default DashboardLayout;