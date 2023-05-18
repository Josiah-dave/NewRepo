import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


const ContactForm = () => {
   const form = useRef();
   
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_agjx9tp', 'template_xzixbwo', form.current, 'NNpB5tGAlzowW5YsY')
      .then((result) => {
        console.log(result.text);
        toastifySuccess()
        clear()
      }, (error) => {
          console.log(error.text);
      });

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
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

    const clear =()=> {
     const msg1 = document.getElementById('input1')
     msg1.value = ''

     const msg2 = document.getElementById('input2')
     msg2.value = ''

     const msg3 = document.getElementById('input3')
     msg3.value = ''
     
     const msg4 = document.getElementById('input4')
     msg4.value = ''

  }
   
  };

  return (
    <>
      <div className="md:w-1/2 p-10 space-y-6">
        <h1 className="text-2xl tracking-widest text-gray-800">
          DROP US A LINE
        </h1>
        <form  ref={form} onSubmit={sendEmail} className='space-y-5'>
          <input
            id="input1"
            type="text"
            placeholder="Your name*"
            name="user_name"
            required
            className="w-full border border-gray-600 py-3 px-3"
          />

          <input
            type="email"
            name="user_email" 
            required
            id="input2"
            placeholder="Email address"
            className="w-full border border-gray-600 py-3 px-3"
          />
          <input
            type="tel"
            placeholder="Your Phone Number*"
            name="subject"
            required
            id="input3"
            className="w-full border border-gray-600 py-3 px-3"
          />
      
          <textarea
            name="message"
            cols="30"
            rows="2"
            placeholder="Your Message*"
            required
            id="input4"
            className="w-full border border-gray-600 py-3 px-3"
          ></textarea>

     
          <button
            type="submit" value="Send"
            className=" tracking-widest w-full border border-clr py-3 text-xl hover:bg-clr hover:text-white trans1"
          >
            SEND
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactForm;
