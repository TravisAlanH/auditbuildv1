import React from 'react'
import NavLayout from './NavLayout'

export default function NavBase() {



  return (
    <div>
      <div className='w-full h-[3rem]'></div>
      <div className='w-full h-[3rem] fixed top-0 orangeSplit'>
          <NavLayout />
      </div>
    </div>
  )
}
