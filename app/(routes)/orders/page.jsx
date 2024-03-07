"use client"
import { useUser } from '@clerk/nextjs';
import './orders.css'
import Link from 'next/link';


export default function Orders() {
  const user = useUser();
    return (
      <>
        {
          user.isSignedIn ? (
            <div className='orders_page'>
                <p>You have made 0 Orders</p>
                <Link href='/orders/terms'>Order now</Link>
            </div>
          ) : (
            <div className='orders_page'>
                  <Link href='/sign-in'>Login</Link>
                  <p>You have to login in order to make an order</p>
            </div>
          )
        }
      </>
    );
  }