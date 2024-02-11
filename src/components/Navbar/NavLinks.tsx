'use client'
import Link from 'next/link'
import { links } from './links'
import { usePathname } from 'next/navigation'
const NavLinks = () => {
    const pathname = usePathname()
    return (
        <div className='hidden md:flex items-center gap-2 capitalize cursor-pointer'>
            {links?.map(link => (
                <Link href={link.link} key={link.title} className={link.link === pathname ? "bg-black text-white rounded-md p-1" : ''}>
                    {link.title}
                </Link>
            ))}
        </div>
    )
}

export default NavLinks