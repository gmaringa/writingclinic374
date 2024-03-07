"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import './showcase.css'

export default function Showcase() {
    const pathname = usePathname()

    return (
        <div>
            {
                pathname === "/" && (
                    <>
                        <div className="showcase_index">
                            <div className="container showcase_index_flex">
                                <div className="showcase_index_details">
                                    <h1>Welcome to Writing Clinic</h1>
                                    <p>Where academic excellence meets expert writing. Our mission is to provide top-notch academic assistance to students and professionals seeking quality and reliability.</p>
                                    <Link href='/sign-in'>Hire Us</Link>
                                </div>
                            </div>
                            <div className="showcase_index_overlay"></div>
                        </div>
                    </>
                )
            }
            {
                pathname === "/about" && (<>
                        <div className="showcase_about">
                            <div className="container showcase_about_flex">
                                <h1>WHO WE ARE</h1>
                            </div>
                        </div>
                </>)
            }
            {
                pathname === "/services" && (<></>)
            }
            {
                pathname === "/contact" && (<></>)
            }
        </div>
    )
}