import React from 'react'
import logo from '../../../images/travel-logo.png'
import profileimg from '../../../images/profileimg.jpeg'
import { Link } from 'react-router-dom'

const Homenavber = () => {
  return (
    <section className='w-[100%] py-[20px] px-[100px] flex items-center justify-between'>
        <div className='w-[120px] h-[120px] overflow-hidden rounded-[50%] '>
            <img className='w-[100%] h-[100%] object-cover ' src={logo} alt="not found" />
        </div>
        <div className='flex items-center justify-right gap-x-[50px]'>
            <div className='flex items-center justify-center'>
                <Link className='text-[22px] text-[#fff] font-[600] bg-[#b3ababaf] rounded-[10px]  cursor-pointer px-[30px] py-[15px] ' to='signout'> sign out</Link>
            </div>
           <Link to='/userprofile'>
                <div className='flex items-center justify-center w-[90px] h-[90px] rounded-[50%] overflow-hidden cursor-pointer'>
                    <img className='w-[100%] h-[100%] object-cover ' src={profileimg} alt="not found" />
                </div>
           </Link>
        </div>
    </section>
  )
}

export default Homenavber