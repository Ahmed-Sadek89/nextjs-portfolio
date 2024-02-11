"use client"
import { useState } from 'react'
import { links } from './links'
import Link from 'next/link'

const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='flex md:hidden'>
            {/* its icon */}
            <div className='flex gap-2 flex-col cursor-pointer z-50' onClick={() => setOpen(prev => !prev)}>
                {
                    open === false ?
                        <>
                            <div className='h-1 w-10 bg-black rounded-md'></div>
                            <div className='h-1 w-10 bg-black rounded-md'></div>
                            <div className='h-1 w-10 bg-black rounded-md'></div>
                        </> :
                        <div className='text-white font-bold text-2xl'>X</div>
                }
            </div>
            {/* its menu */}
            {
                open === true &&
                <div className='absolute top-0 right-0 w-screen h-screen capitalize bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl '>
                    {links?.map(link => (
                        <Link href={link.link} key={link.title} onClick={() => setOpen(prev => !prev)}>
                            {link.title}
                        </Link>
                    ))}
                </div>
            }

        </div>)
}

export default Menu