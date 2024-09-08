"use client";

import { ProductMenu } from '@/components/ProductMenu';
import { Search, Bell, CircleUser, ShoppingBag, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';

const Header = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const logo = useMemo(() => (
    <Image src="/pagzone-ecommerce-logo.png"
           width={50}
           height={50}
           alt="Picture of the author" />    
    ), []);

  const authLinks = useMemo(() => (
    isAuth ? (
      <div className="flex items-center gap-3.5">
        <Link href="/" className="relative" aria-label="Shopping Cart">
          <ShoppingBag size={27} />
          <span className="absolute top-0 right-0 bg-blue-500 rounded-full w-3.5 h-3.5 text-center text-[11px]">
            1
          </span>
        </Link>
        <Link href="/" className="relative" aria-label="Notifications">
          <Bell size={27} />
          <span className="absolute top-0 right-0 bg-blue-500 rounded-full w-3.5 h-3.5 text-center text-[11px]">
            1
          </span>
        </Link>
        <Link href="/" aria-label="User Profile">
          <CircleUser size={27} />
        </Link>
      </div>
    ) : (
      <div className="flex gap-x-2 text-sm">
        <Link href="/" className="hover:underline">Sign in</Link>
        <span>|</span>
        <Link href="/" className="hover:underline">Sign up</Link>
      </div>
    )
  ), [isAuth]);

  return (
    <header className="flex flex-col h-16 md:h-28 px-4 md:mx-[75px]">
      {/* Mobile Header */}
      <div className="flex justify-between items-center py-6 px-1 md:hidden">

        <div className={`flex justify-center ${isAuth ? 'gap-x-6' : 'gap-x-8'} `}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Link href="/" aria-label="User Profile">
            <CircleUser size={27} />
          </Link>
        </div>
      
        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          {logo}
        </div>

        {/* Search and Cart Icons */}
        <div className={`flex items-center ${isAuth ? 'gap-x-4' : 'gap-8' } `}>
          <Link href="/" aria-label="Search">
            <Search size={27} />
          </Link>
          <Link href="/" className="relative" aria-label="Shopping Cart">
            <ShoppingBag size={27} />
            <span className="absolute top-0 right-0 bg-blue-500 rounded-full w-3.5 h-3.5 text-center text-[11px] text-white">
              0
            </span>
          </Link>
          {isAuth && (
            <Link href="/" className="relative" aria-label="Notifications">
              <Bell size={27} />
              <span className="absolute top-0 right-0 bg-blue-500 rounded-full w-3.5 h-3.5 text-center text-[11px]">
                1
              </span>
            </Link>
          )} 
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between py-4 border-b-[1px]">
        <div className="flex items-center">
          {logo}
          <h1 className="font-lora font-medium text-xl">PAGZONE</h1>
        </div>

        {/* Search Input */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border-2 bg-slate-200 py-2 px-4 rounded-lg w-80"
          />
          <Search size={24} className="absolute top-2.5 right-3 text-slate-400" />
        </div>

        {/* Auth and Icons */}
        <div className="hidden md:flex">
          {authLinks}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-2 p-4 md:hidden">
          <ProductMenu />
        </nav>
      )}

      {/* Product Navbar for Desktop */}
      <nav className="hidden md:flex flex-col gap-2 mt-2 ">
        <ProductMenu />
      </nav>
    </header>
  );
};

export default Header;
