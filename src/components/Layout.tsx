import React from 'react'
import Sidebar from './Sidebar';
import { AppSidebar } from './sidebar/app-sidebar';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';

const DashboardLayout = ({
    children,
}: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                {children}
            </main>
        </SidebarProvider>

    )
}

export default DashboardLayout;