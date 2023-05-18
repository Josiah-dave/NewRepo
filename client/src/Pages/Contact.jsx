import React from 'react'
import { FaClock, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Page from '../Components/Page';

const Contact = () => {
  return (
    <>
     <Header />
    <Page tag="contact us"/>

        <div className='w-full md:p-10  md:flex items-center'>
          <ContactForm/>
          {/* <div className='md:w-1/2 p-10 space-y-6'>
            <h1 className='text-2xl tracking-widest text-gray-800'>DROP US A LINE</h1>
            <input type="text" placeholder='Your name*' name="" id="" required className='w-full border border-gray-600 py-3 px-3'/>
            <input type="email" placeholder='Your Email*' name="" id="" required  className='w-full border border-gray-600 py-3 px-3'/>
            <input type="tel" placeholder='Your Phone Number*' name="" id="" required className='w-full border border-gray-600 py-3 px-3'/>
            <textarea name="" id="" cols="30" rows="2" placeholder='Your Message*' required className='w-full border border-gray-600 py-3 px-3'></textarea>
            <button className=' tracking-widest w-full border border-clr py-3 text-xl hover:bg-clr hover:text-white trans1'>SEND</button>
          </div> */}


          <div className='md:w-1/2 md:p-10 p-10 '>
            <h1  className='text-xl uppercase tracking-widest text-gray-800 mb-4'>Contact information</h1>
            <p className='mb-3 text-left'>We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be appreciated. Please complete the form below.</p>
          <p className='flex text-gray-800' ><FaPhoneAlt className='mr-3'/> 1800-123-222 / 1900-1570-230</p>
          <p className='flex text-gray-800'><FaMailBulk className='mr-3'/> admin@elvshop.com</p>
          <p className='flex text-gray-800'><FaClock className='mr-3'/> Everyday 9:00-17:00</p>


          </div>
          
        </div>
      <Footer/>

    </>
  )
}

export default Contact