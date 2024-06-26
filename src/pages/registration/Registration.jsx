import React, { useState } from 'react'
import Div from '../../utilities/div/Div'
import Heading from '../../utilities/heading/Heading'
import Input from '../../utilities/input/Input'
import Button from '../../utilities/button/Button'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { validationSchema } from '../../FromValidation/RegisValidation'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from "firebase/auth";
import {  BallTriangle } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();
  const [loder, setLoder] = useState(false)

  const initialValues = {
    fullName: '',
    number: '',
    email: '',
    password: '',
    conPass: '',
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema : validationSchema,
    onSubmit: (values, action) => {
      setLoder(true)
      // console.log(values);      
      createUserWithEmailAndPassword (auth, values.email, values.password,) .then((userCredential) => {
        // Signed up 
        // console.log(userCredential.user);
        sendEmailVerification(auth.currentUser).then(()=>{
          updateProfile(auth.currentUser, {
            displayName: values.fullName,
             photoURL: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",    
          }).then(()=>{
            set(ref(db, 'users/' + userCredential.user.uid), {
              username: userCredential.user.displayName,
              email: userCredential.user.email,
              profile_picture :userCredential.user.photoURL,
            }).then(()=>{
              navigate("/")
            })
            // console.log(userCredential);
          })
        })
        // ...
      }) .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/email-already-in-use") {
          toast.error('email alredy existed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }else{
          console.log("");
        }
        // ..
      });
      action.resetForm()
      setTimeout(()=>{
        setLoder(false)
      },1000)
    },
  });



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
    <Div className="w-full h-[700px]	bg-center	bg-no-repeat	bg-cover overflow-auto" style={{backgroundImage : 'url(https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
       <Div className="w-[400px] mx-auto flex items-center justify-center flex-col mt-[20px]  py-4 px-6  bg-[#0080807e] rounded-lg	gap-5">
            <Heading level="6" className="font-bold text-3xl text-white font-roboto">
              Registration
            </Heading>
            <form className='w-full flex flex-col gap-5 ' onSubmit={formik.handleSubmit}>
               <Div>
               <Input className="w-full outline-none	p-3 rounded-lg" name="fullName" type="text" placeholder="Enter Your Full Name" onChange={formik.handleChange} value={formik.values.fullName}/>
               {formik.touched.fullName && formik.errors.fullName ? (
                  <p className='text-[white] text-base font-normal font-roboto'>{formik.errors.fullName}</p>
                ) : null}
               </Div>
               <Div>
               <Input className="w-full outline-none	p-3 rounded-lg" name="number"   type="text" placeholder="Enter Your Number" onChange={formik.handleChange} value={formik.values.number}/>
               {formik.touched.number && formik.errors.number ? (
                  <p className='text-[white] text-base font-normal font-roboto'>{formik.errors.number}</p>
                ) : null}
               </Div>
                <Div>
                <Input className="w-full outline-none	p-3 rounded-lg" name="email"    type="email" placeholder="Enter Your email" onChange={formik.handleChange} value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ? (
                  <p className='text-[white] text-base font-normal font-roboto'>{formik.errors.email}</p>
                ) : null}
                </Div>
                 <Div>
                 <Input className="w-full outline-none	p-3 rounded-lg" name="password"  type="password" placeholder="Enter Your password" onChange={formik.handleChange} value={formik.values.password}/>
                 {formik.touched.password && formik.errors.password ? (
                  <p className='text-[white] text-base font-normal font-roboto'>{formik.errors.password}</p>
                ) : null}
                 </Div>
                <Div>
                <Input className="w-full outline-none	p-3 rounded-lg" name="conPass"  type="password" placeholder="Confram password" onChange={formik.handleChange} value={formik.values.conPass}/>
                {formik.touched.conPass && formik.errors.conPass ? (
                  <p className='text-[white] text-base font-normal font-roboto'>{formik.errors.conPass}</p>
                ) : null}
                </Div>
                {
                  loder ?
                  <BallTriangle
                    height={100}
                    radius={5}
                    color="#fff"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                   :
                <Button className="w-full bg-[#72ff56a6] hover:bg-[#72ff56]	text-[black] mt-[15px] text-xl p-4 rounded-xl font-bold font-roboto" text="Submit" type="submit"/>
                }
            </form>
            <span className='font-roboto text-lg font-normal text-white'>Already have an account? <Link className='text-[#272926] font-medium' to="/"> Login</Link></span>
       </Div>
    </Div>
    </>
  )
}

export default Registration