import React from 'react'
import Heading from '../../../utilities/heading/Heading'
import profileimg from '../../../images/profileimg.jpeg'
import './Userprofilesettion.css'
import Profilelink from '../../../components/profilelink/Profilelink'
import { FaPen } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { HiPhotograph } from "react-icons/hi";
import { BsQuestionCircle } from "react-icons/bs";

const Userprofilesettion = () => {
  return (
    <div className='user-setting-contant-box w-[620px] bg-[#fff] pt-[20px] pl-[20px] pr-[20px] pb-[100px] shadow-black rounded-[10px]  '>
         <Heading level='h4' children='Profile Settings' className='text-[20px] text-[#000] font-[600]'/>
        <div className='user-profile-box ml-[20px] mt-[30px] flex items-center justify-left gap-x-[30px]'>
            <div className='w-[100px] h-[100px] rounded-[50%] overflow-hidden cursor-pointer'>
                <img className='w-[100%] h-[100%] object-cover ' src={profileimg} alt="not found" />
            </div>
            <div className='text-left'>
                <Heading level='h4' children='A B M Shawon Islam ' className='text-[28px] text-[#000] font-[600]'/>
                <div>
                    <Heading level='' children='Stay home stay safe' className='text-[16px] text-[#000] font-[400] mt-[2px]'/>
                </div>
            </div>
        </div>
        <div className='ml-[20px] text-left mt-[72px]'>
            <Profilelink linktext="Edit Profile Name." icon={<FaPen />}/>
            <Profilelink linktext="Edit Profile Status Info." icon={<RiMessage2Fill />} />
            <Profilelink linktext="Edit Profile Photo." icon={<HiPhotograph />} />
            <Profilelink linktext="help" icon={<BsQuestionCircle />}/>
        </div>
    </div>
  )
}

export default Userprofilesettion