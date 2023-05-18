import React from 'react'

import paypal from '../Shopping/papyel2.png'


import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
       
       <div className=' bg-clr py-5'>
         
        <div className='md:w-3/5 w-2/3 mx-auto border-y-[1px]  my-10 items-center bg-clr'>
          <ul className='items-center md:flex flex flex-wrap py-6 justify-evenly gap-3'>
            <li className='text-white text-md  hover:text-lg py-2 trans1'><Link to="/">Home</Link></li>
            <li className='text-white text-md   hover:text-lg py-2 trans1'><Link to="/Products">Online Store</Link></li>
            <li className='text-white text-md   hover:text-lg py-2 trans1'><Link to="/Aboutpage">About</Link></li>
            <li className='text-white text-md   hover:text-lg py-2 trans1'><Link to="/Contact">Contact Us</Link></li>
            <li className='text-white text-md   hover:text-lg py-2 trans1'><Link to="/Signup">Register</Link></li>
            <li className='text-white text-md   hover:text-lg py-2 trans1'><Link to="/Login">Login</Link></li>
          </ul>

        </div>





        <p className='text-center text-white text-xl pt-10'>© 2023 <span className='text-black   font-black'>ElviShop</span></p>

            <div className='md:w-1/5 w-2/5 mx-auto py-2'>
                <img src={paypal} alt="" className='w-full' />

            </div>

       </div>

    </>
  )
}

export default Footer