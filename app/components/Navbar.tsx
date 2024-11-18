'use client'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Navbar() {
  return (
    <>
       <DesktopNavbar />
    </>
  )
}

const items = [
    {label: 'Dashboard', link: '/'},
    {label: 'Transactions', link: '/transactions'},
    {label: 'Manage', link: '/manage'}
]

function DesktopNavbar () {
    return (
        <div className='hidden border-separate border-b bg-background md:block'>
            <nav className='container flex items-center justify-between px-8'>
                <div className='flex h-[80px] min-h-[60px] items-center gap-x-4'>
                    <Logo />
                    <div className='flex h-full'></div>
                    {items.map(item => (
                        <NavbarItem
                        key={item.label}
                        link={item.link}
                        label={item.label}
                    />
                    ))}
                </div>
            </nav>
        </div>
    )
}

function NavbarItem({link, label}: {
    link: string
    label: string
}) {
    const pathname = usePathname()
    const isActive = pathname === link

    return(
        <div className='relative flex items-center'>
            <Link href={link}>{label}</Link>
        </div>
    )
}

export default Navbar