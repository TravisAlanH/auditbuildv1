import React from 'react'
import Logo from './Logo'
import NavMenu from './NavMenu'

export default function NavLayout() {
  return (
    <div className='flex flex-row justify-between items-center h-full px-[.5rem]'>
        <Logo />
        <NavMenu />
    </div>
  )
}
