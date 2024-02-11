import React from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 px-4 md:px-8 lg:px-12'>
      {/* links */}
      <NavLinks />
      {/* logo */}
      <div className='md:hidden sm:flex lg:flex bg-black text-white items-center capitalize rounded-md p-2 cursor-pointer'>
        <span className='mr-1'>ahmed</span>
        <span className='bg-white font-semibold text-black rounded-md p-1'>sadek</span>
      </div>
      {/* social-images */}
      <div className='hidden md:flex'>social-images</div>
      {/* hamborger menu */}
      <div className='flex md:hidden'>hamborger menu</div>
    </div>
  )
}

export default Navbar