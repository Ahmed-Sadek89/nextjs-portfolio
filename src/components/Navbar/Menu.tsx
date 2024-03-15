"use client"
import { useState } from 'react'
import { motion } from 'framer-motion';
import { links } from './links'
import Link from 'next/link'
import { bottomIcon, centerIcon, menuListItem, menuVariant, topIcon } from './motions';

const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='flex md:hidden z-50'>
            {/* its icon */}
            <div className='flex flex-col justify-between cursor-pointer z-50 w-10 h-8' onClick={() => setOpen(prev => !prev)}>
                <motion.div
                    className='h-1 w-10 bg-black rounded-md origin-left'
                    variants={topIcon}
                    animate={open ? "opened" : "closed"}
                ></motion.div>
                <motion.div
                    variants={centerIcon}
                    animate={open ? "opened" : "closed"}
                    className='h-1 w-10 bg-black rounded-md origin-left'
                ></motion.div>
                <motion.div
                    className='h-1 w-10 bg-black rounded-md origin-left'
                    variants={bottomIcon}
                    animate={open ? "opened" : "closed"}
                ></motion.div>
            </div>
            {/* its menu */}
            {
                open &&
                <motion.div
                    className='absolute top-0 right-0 w-screen h-screen capitalize bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'
                    variants={menuVariant}
                    initial="closed"
                    animate="opened"
                >

                    {links?.map(link => (
                        <motion.div
                            variants={menuListItem}
                            key={link.title}
                        >
                            <Link href={link.link} onClick={() => setOpen(prev => !prev)}>
                                {link.title}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            }

        </div>)
}

export default Menu