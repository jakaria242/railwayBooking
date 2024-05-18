import React from 'react'
import Userprofilesettion from './userprofilesetting/Userprofilesettion'
import Useraccoundsettion from './useraccoundsettion/Useraccoundsettion'

const Userprofile = () => {
  return (
    <section id = 'bg-[#fff]'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between mt-[100px]'>
                <Userprofilesettion/>
                <Useraccoundsettion/>
            </div>
        </div>
    </section>
  )
}

export default Userprofile