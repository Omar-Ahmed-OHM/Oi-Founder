"use client"
import React, { useState } from 'react'
import Image from 'next/image'  
import logo from '../../../public/asset/images/logo.svg'
import Link from 'next/link';
export default function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
    return(
        <>
        <section className="side p-12">

        <nav className="sidebar " id="sidebar">
            <ul className='flex flex-col justify-between gap-32 font-semibold text-[20px] items-center text-paragraph-color'>
                <li>
                    <Link href="/dashboard/users">Users</Link>
                </li>

                <li>
                    <Link href="/dashboard/complain">Complains</Link>
                </li>

                <li>
                    <Link href="/dashboard/empelwee">empelwee</Link>
                </li>


                
                <li>
                    <Link href="/dashboard/empelwee">Free Users</Link>
                </li>


                   
                <li>
                    <Link href="/dashboard/empelwee">Setting</Link>
                </li>
            </ul>
        </nav>
        </section>
        </>
    )
}
