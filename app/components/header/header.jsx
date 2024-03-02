"use client"
import { useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { UserButton } from "@clerk/nextjs";

import Link from 'next/link'
import './header.css'

export default function Header() {
    const pathname = usePathname()
    const user = useUser()

    return (
        <div className="header">
            <div className="container header_flex">
                <div className='title'>
                    <Link href='/'>
                        <span>Writing</span>
                        <span>Clinic</span>
                    </Link>
                </div>
                <div className='right_header'>
                    <div className="nav">
                        <Link href='/' className={pathname === "/" ? 'header_link active' : "header_link"}>Home</Link>
                        <Link href='/about' className={pathname === "/about" ? 'header_link active' : "header_link"}>About</Link>
                        <Link href='/services' className={pathname === "/services" ? 'header_link active' : "header_link"}>Services</Link>
                        <Link href='/orders' className={pathname === "/orders" ? 'header_link active' : "header_link"}>Orders</Link>
                        <Link href='/contact' className={pathname === "/contact" ? 'header_link active' : "header_link"}>Contact</Link>
                    </div>
                    <div className="right_nav">
                        {!user.isSignedIn ? (
                            <div className='login_header'>
                                <Link href='/sign-in' className='login_btn'>Login</Link>
                            </div>
                        ) : (
                            <div className='post_job_header'>
                                <UserButton />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}