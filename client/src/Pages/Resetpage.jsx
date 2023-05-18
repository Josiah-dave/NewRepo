import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Message from '../Components/Message'
import Page from '../Components/Page'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Resetpage = () => {

  const toastifySuccess = () => {
    toast("Successfully Submitted, check your email for your password reset link.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
      theme: 'dark'
    });
  };

    const [email, setEmail] = useState('')
    // const [isOPen, setIsopen] = useState(false);

    const submitHandler = () =>{
      let send = document.getElementById('input')
      if(send.value === ''){
      
      }
      else{
        toastifySuccess();
        send.value = ''

      }
        // <Message text={'Successfully Submitted, check your email for your password reset link'}/>
        
    }


  return (
    <>
    <Header/>

    <Page tag={"Password Reset Page"}/>
    <div className='w-full p-10 text-center'>
        <form action="" className='md:w-2/6 mx-auto space-y-5' onSubmit={''} >
          


            <input type="email" className='w-full rounded-3xl py-3 px-2 outline-none border border-gray-500'  
            required 
            placeholder='Enter email here'
            value={email}
            id='input'
            onChange={(e) => setEmail(e.target.value)} />


           <button className='bg-clr py-3 rounded-md w-4/5 md:w-3/5 my-8 text-white' onClick={(e) => submitHandler()}>RESET</button>
        </form>
        
    </div>
 <ToastContainer />
    <Footer/>



    </>
  )
}

export default Resetpage