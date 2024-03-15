import NavLinks from './NavLinks'
import { social_links } from './links'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className={`flex items-center justify-between text-sm py-4 px-4 md:px-8 lg:px-12`}>
      <NavLinks />
      <Link href={'/'}>
        <div className='md:hidden sm:flex lg:flex bg-black text-white items-center capitalize rounded-md p-1 cursor-pointer'>
          <span className='mr-1 p-1'>ahmed</span>
          <span className='bg-white font-semibold text-black rounded-md p-1'>Sadek</span>
        </div>
      </Link>
      <div className='hidden md:flex gap-3'>
        {social_links.map(links => (
          <Link key={links.title} href={links.link}>
            <Image src={links.path} alt={links.title} key={links.title} width={20} height={20} />
          </Link>
        ))}
      </div>
      <Menu />
    </div>
  )
}

export default Navbar