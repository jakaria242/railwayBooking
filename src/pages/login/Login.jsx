import React, { useState } from 'react';
import Heading from '../../utilities/heading/Heading';
import TextField from '@mui/material/TextField';
import { Oval } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import backimg from '../../images/loginimg.jpg';
import google from '../../images/google.svg';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosEye } from "react-icons/io";
import { IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
 const auth = getAuth()
 const navigate = useNavigate()
 let [loder , setLoder] = useState(false)
 let [checktype , setChecktype] = useState(false)

            //all input data add this userData state
  let [userData , setUserData] = useState({
    email : "",
    password : ""
  })
  let handleSigin = (e)=>{
    let {name , value} = e.target
    setUserData({...userData,[name]:value})
  }
          //this state give a requier the user
  let[error , setError] =useState({
      email : "",
      password : ""
  })

            //email regex
  let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

  let signbtn = (e)=>{ 
    e.preventDefault();
          //validation
      if(!userData.email){
        setError({email:"Email is Require"});
      }else if(!userData.email.match(emailregex)){
        setError({email:""});
        setError({email:"Inter valid Email"});
      }else if(!userData.password){
        setError({password:"Password is Require"});
      }else{
        setLoder(true);
                //firebase authentication
        signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
          if(userCredential.user.emailVerified){ //check email verified
            navigate("/home")
         }else{
            signOut(auth).then(() => {
              toast.error('Please verify your email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              setLoder(false)
            });
         }
        })
        .catch((error) => {
          const errorCode = error.code;
          if(errorCode == "auth/invalid-credential"){
            setError({email:"invalid email or password"});
            setLoder(false);
          }else{
            setError({email: ""});
          }
        });
      }
  }
  return (
  <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <section id='login'>
          <img src={backimg} alt="not found" />
          <div className='max-w-container mx-auto '>
            <form className='w-[500px] bg-[#fff] px-[30px] py-[20px] rounded-[10px] mx-auto absolute left-[50%] top-[50%]   translate-x-[-50%] translate-y-[-50%]'>
                    <Heading level='h1' children="Login to your account!" className='text-[35px] text-[#11175D] font-[700] font-roboto' />
                    <div className='w-[200px] flex items-center justify-center mt-[20px] cursor-pointer '>
                      <Link className='w-[100%] flex items-center justify-center gap-x-[10px] border-[1px] border-indigo-600 rounded-[15px] py-[20px]'>
                        <div className='google-svg-box'>
                          <img src={google} alt="not found" />
                        </div>
                        <span className='text-[12px] text-[#000] font-[500] font-roboto'>Login with Google</span>
                      </Link>
                    </div>
                    <div className='w-[100%] mt-[20px] flex flex-col gap-y-[20px]  '>
                      <div className='w-[100%]'>
                        <TextField id='outlined-basic' className='w-[100%] ' value={userData.email}  type='email' label='Email' name ='email' onChange={handleSigin}  variant='outlined'/>
                        {error.email && <p className='mt-[10px] text-[red] text-[14px] font-500 font-roboto'>{error.email}</p>}
                      </div>
                      <div className='login_input_box_password'>
                        <TextField id='outlined-basic' className='w-[100%]' value={userData.password} type={checktype ? "password" : "text"} label="Password" name ='password' onChange={handleSigin} variant='outlined' />
                        {  
                         checktype  
                          ?
                         <IoEyeOffOutline className='login_closs_eye' onClick={()=>{setChecktype(!checktype)}}/>
                          :
                          <IoIosEye className='login_open_eye' onClick={()=>{setChecktype(!checktype)}} />
                         }
                        {error.password && <p className='mt-[10px] text-[red] text-[14px] font-500 font-roboto'>{error.password}</p>}
                      </div>
                    </div>
                    <div className='w-[100%] flex items-center justify-center mt-[20px] cursor-pointer bg-[#5F35F5] rounded-[10px]'>
                      {
                        loder 
                        ?
                        (<Oval
                          visible={true}
                          height="30"
                          width="30"
                          color="#fff"
                          ariaLabel="oval-loading"
                          wrapperStyle={{}}
                          wrapperClass="oval"
                          />)
                          :
                          <button className=' w-[100%] py-[10px] text-[18px] text-[#fff] font-[600] font-robot cursor-pointer bg-[#5F35F5] rounded-[10px] delay-75 hover:bg-[#2F1AC4] ' onClick={signbtn}>Sign up</button>
                      }
                    </div>
                    <div className='flex items-center justify-left gap-x-[5px] mt-[20px]'>
                      <Heading level='h4' children="Don't have an account ?" className='text-[14px] text-[#11175D] font-[400] font-robot'/>
                      <Link className='text-[16px] text-[#0f8a2a] font-[600] font-robot cursor-pointer' to="registration">Sign up</Link>
                    </div>
                    <div className='flex items-center justify-left gap-x-[5px] mt-[10px]'>
                      <Heading level='h4' children="Your forget password! ?" className='text-[14px] text-[#11175D] font-[400] font-robot'/>
                      <Link className='text-[16px] text-[#2bdce2] font-[600] font-robot cursor-pointer' to="forgetpass">Forget Password</Link>
                    </div>
                </form>
          </div>
    </section>
  </>
  )
}

export default Login