'use client'

import React from 'react'
import { Navbar as NextUINavbar, NavbarContent, NavbarItem } from "@nextui-org/navbar"
import { Plus, ChevronLeft } from 'lucide-react';
import BaseButton from './base/BaseButton'

const Navbar = () => {
  return (
    <NextUINavbar isBordered>
      <NavbarContent>
        <ChevronLeft className='text-[#F6AA32] cursor-pointer'/>
      </NavbarContent>
     <NavbarContent justify="center">
      <NavbarItem>
        <img src="/asset/logo.png" alt="" />
      </NavbarItem>
     </NavbarContent>
     <NavbarContent justify="end">
        <NavbarItem>
          <BaseButton icon={<Plus className="hidden md:block"/> } title='Add' color='warning' variant='ghost'/>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}

export default Navbar