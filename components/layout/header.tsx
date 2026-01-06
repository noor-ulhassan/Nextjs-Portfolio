"use client"
import { useState,useEffect } from 'react';
import { Button } from '../ui/button';
import { Download,DownloadIcon,Menu,MenuIcon,X } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { Item } from '@radix-ui/react-accordion';
import{motion,AnimatePresence} from "framer-motion";

const Header = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen]=useState(false)

    const menuItems=[
        {label:"About",href:"#about"},
        {label:"Skills",href:"#skills"},
        {label:"Projects",href:"#projects"},
        {label:"Testimonials",href:"#testimonials"},
        {label:"Contact",href:"#contact"},

    ]
  return (
   <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
        <Link href={"/"} className='text-xl font-bold text-primary text-yellow-300'> Noor ul Hassan</Link>
        
        
        
        {/*Desktop Menu*/ }

        <nav className='hidden md:flex items-center gap-8'>
            {
                menuItems.map((item)=>(
                    <a href={item.href} key={item.href}
                    className='text-sm font-medium text-muted-foreground hover:text-yellow-300 transition-colors'>
                        {item.label}
                    </a>
                ))
            }
            <Button className='bg-yellow-300 text-black gap-2' size={"sm"}>
                <Download className='w-4 h-4'/>Resume
            </Button>
        </nav>

        {/* Mobile Menu Button */}

        <Button variant={"ghost"} size={"icon"} className='md:hidden bg-yellow-300 text-black'
        onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>

            {
                isMobileMenuOpen?(
                    <X className='w-5 h-5'/>
                ):(
                    <MenuIcon className='w-5 h-5'/>
                )
            }

        </Button>

        </div>
    </div>

    {/* Mobile MENU */}

    <AnimatePresence>
        {
            isMobileMenuOpen && (
                <motion.div
                initial={{opacity:0,height:0}}
                animate={{opacity:1,height:'auto'}}
                exit={{opacity:0,height:0}}
                className='md:hidden border-t'>

                    <nav className='container mx-auto px-4 py-4 flex flex-col gap-4'>
                    {
                        menuItems.map((item)=>(
                            <a href={item.href} key={item.href} className='text-sm font-medium text-muted-foreground hover:text-yellow-300 transition-all'
                            onClick={()=>setIsMobileMenuOpen(false)}>
                                {item.label}
                            </a>
                        ))
                    }

                    <Button variant={'default'} size={"sm"} className='gap-2 bg-yellow-300 text-black'>
                        <DownloadIcon className='w-4 h-4'/> Resume
                    </Button>
                    </nav>

                </motion.div>
            )
        }
    </AnimatePresence>

    </header>
  );
};
  


export default Header