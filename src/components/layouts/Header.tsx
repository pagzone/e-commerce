"use client";

import { ProductMenu } from '@/components/ProductMenu';
import { Bell, CircleUser, Menu, Search, ShoppingBag, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

const authIcons = [
  { 
    icon :  'ShoppingBag',
    href : '/'
  },
  { 
    icon :  'Bell',
    href : '/'
  },
  { 
    icon :  'CircleUser',
    href : '/user/login'
  }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const logo = useMemo(() => (
    <Image src="/pagzone-ecommerce-logo.png" width={50} height={50} alt="Logo" />
  ), []);

  const authLinks = useMemo(() =>
    <div className="flex items-center gap-3.5">
      {authIcons.map((value, i) => (
        <Link href={value.href} key={i} className="relative">
          {React.createElement(value.icon === 'ShoppingBag' ? ShoppingBag : value.icon === 'Bell' ? Bell : CircleUser, { size: 27 })}
          {i < 2 && <span className="absolute top-0 right-0 bg-blue-500 rounded-full w-3.5 h-3.5 text-[11px] text-center">1</span>}
        </Link>
      ))}
    </div>
 , []);

  return (
    <header className="flex flex-col h-16 md:h-28 px-4">
      {/* Mobile Header */}
      <div className="flex justify-between items-center py-6 px-1 md:hidden">
        <div className="flex justify-center gap-x-8 ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Link href="/"><CircleUser size={27} /></Link> 
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">{logo}</div>
        <div className="flex items-center gap-x-8">
          <Link href="/"><Search size={27} /></Link>
          <Link href="/" className="relative"><ShoppingBag size={27} /><span className="absolute top-0 right-0 bg-blue-500 rounded-full w-3.5 h-3.5 text-white text-[11px]">0</span></Link>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between py-4 border-b-[1px]">
        <div className="flex items-center">{logo}<h1 className="font-lora font-medium text-xl">PAGZONE</h1></div>
        <div className="relative hidden md:block">
          <input type="text" placeholder="Search" className="border-2 bg-slate-200 py-2 px-4 rounded-lg w-80" />
          <Search size={24} className="absolute top-2.5 right-3 text-slate-400" />
        </div>
        <div className="hidden md:flex">{authLinks}</div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <nav className="flex flex-col gap-2 p-4 md:hidden"></nav>}

      {/* Product Navbar for Desktop */}
      <nav className="hidden md:flex flex-col gap-2 mt-2"><ProductMenu /></nav>
    </header>
  );
};

export default Header;