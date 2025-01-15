import React from 'react';
import { Home, Search, Bell, User, ReceiptText, ShieldBan } from 'lucide-react';

const BottomNavigation = () => {
    const [activeTab, setActiveTab] = React.useState('home');

    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'search', icon: ReceiptText, label: 'Transaction' },
        { id: 'notifications', icon: ShieldBan, label: 'Savings' },
        { id: 'profile', icon: User, label: 'Profile' }
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black pb-safe">
            <nav className="flex justify-around items-center h-16">
                {navItems.map(({ id, icon: Icon, label }) => (
                    <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${activeTab === id ? 'text-[#FC4B37]' : 'text-gray-600'
                            }`}
                    >
                        <Icon className={`w-6 h-6 ${activeTab === id ? 'text-[#FC4B37]' : 'text-gray-600'
                            }`} />
                        <span className="text-xs">{label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default BottomNavigation;