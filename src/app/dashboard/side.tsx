"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`
            ${isOpen ? 'w-64' : 'w-16'}
            bg-gray-800 text-white h-screen fixed transition-width duration-300
        `}>
            <button
                onClick={toggleSidebar}
                className="text-white text-lg p-2 focus:outline-none"
            >
                {isOpen ? '<' : '>'}
            </button>
            <nav className="mt-4">
                <ul className="space-y-4">
                    <li>
                        <Link href="/dashboard">
                            <Link href={'/'} className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link >
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile">
                            <Link href={'/'} className="block p-2 hover:bg-gray-700 rounded">Profile</Link>
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings">
                            <Link href={'/'} className="block p-2 hover:bg-gray-700 rounded">Settings</Link >
                        </Link>
                    </li>
                    <li>
                        <Link href="/logout">
                            <Link href={'/'} className="block p-2 hover:bg-gray-700 rounded">Logout</Link   >
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Sidebar;