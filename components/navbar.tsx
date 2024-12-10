'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { Navbar as NextUINavbar, NavbarContent, NavbarItem } from "@nextui-org/navbar"
import { Plus, ChevronLeft } from 'lucide-react';
import BaseButton from './base/BaseButton'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  return (
    <NextUINavbar isBordered>
      <NavbarContent>
        {!isHomePage && (
          <button 
            className="text-[#F6AA32] cursor-pointer bg-transparent border-none"
            onClick={() => router.back()}
          >
            <ChevronLeft />
          </button>
        )}
      </NavbarContent>
     <NavbarContent justify="center">
      <NavbarItem>
        <img src="/asset/logo.png" alt="online shop logo" />
      </NavbarItem>
     </NavbarContent>
     <NavbarContent justify="end">
      {isHomePage && (
        <NavbarItem>
          <BaseButton action={() => router.push('/item-form')} icon={<Plus className="hidden md:block"/> } title='Add' color='warning' variant='ghost'/>
        </NavbarItem>
        )
      }        
      </NavbarContent>
    </NextUINavbar>
  )
}

export default Navbar