import React from 'react'
import { Link } from 'react-router-dom'

const Profilelink = ({linktext , icon}) => {
  return (
    <div className='flex items-center justify-left gap-x-[30px] mt-[30px] '>
        <div className='text-[28px] text-[#000]'>
            {icon}
        </div>
        <Link className='text-[18px] text-[#000] font-[600] cursor-pointer capitalize' to = ''>{linktext}</Link>
    </div>
  )
}

export default Profilelink