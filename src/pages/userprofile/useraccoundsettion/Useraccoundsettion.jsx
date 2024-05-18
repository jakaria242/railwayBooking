import React from 'react'
import Profilelink from '../../../components/profilelink/Profilelink'
import Heading from '../../../utilities/heading/Heading'
import { FaKey } from "react-icons/fa";
import { TbPhotoCircleMinus } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const Useraccoundsettion = () => {
  return (
    <div className='user-setting-contant-box w-[620px] bg-[#fff] pt-[20px] pl-[20px] pr-[20px] pb-[100px] shadow-black rounded-[10px]  '>
         <Heading level='h4' children='Profile Settings' className='text-[20px] text-[#000] font-[600]'/>
        <div className='ml-[20px] text-left mt-[72px]'>
            <Profilelink linktext="Change Password" icon={<FaKey />}/>
            <Profilelink linktext="Theme." icon={<TbPhotoCircleMinus />} />
            <Profilelink linktext="Delete Account." icon={<MdDelete />} />
        </div>
    </div>
  )
}

export default Useraccoundsettion