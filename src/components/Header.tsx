"use client"

import {ProductMenu} from '@/components/ProductMenu';
import { Search , Bell , CircleUser  , ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isAuth, setisAuth] = useState(false);

  return (
    <header className="flex flex-col h-28 mx-[75px]">
      <div className="flex items-center justify-between py-4 px-6">

        {/* Logo and Title */}
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-black">{/* Add logo here */}</div>
            <h1 className="font-lora font-medium text-xl">PAGZONE</h1>
        </div>

        {/* Search Bar */}
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                className="border-2 bg-slate-200 py-2 px-4 rounded-lg w-80 max-md:w-40"
            />
            <Search size={24} className="absolute top-2.5 right-3 text-slate-400" />
        </div>

        {/* Auth and Icons */}
        <div>
          {!isAuth ? (
            <div className="flex gap-x-2 text-sm">
             <Link href="/" className="hover:underline">
                Sign in
             </Link>
                 |
             <Link href="/" className="hover:underline">
                Sign up
             </Link>
            </div>
            ) : (
            <div className="flex items-center gap-3.5">
             <Link href="/" className="relative">
              <ShoppingBag size={27} />
                <span className="absolute top-0 right-0 bg-red-500 rounded-full w-3.5 h-3.5 text-center text-[11px]">
                    1
                </span>
              </Link>
              <Link href="/" className="relative">
                <Bell size={27} />
                    <span className="absolute top-0 right-0 bg-red-500 rounded-full w-3.5 h-3.5 text-center text-[11px]">
                        1
                    </span>
              </Link>
              <Link href='/'>
                <CircleUser size={27} />
               </Link>
            </div>
            )}
          </div>
       </div>
       {/* Navigation bar */ }
     <nav className="px-6">
        <ProductMenu/>
     </nav>
    </header>
  )
}

export default Header