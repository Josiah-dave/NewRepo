import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
// import FormContainer from '../Components/FormContainer'
import CheckoutSteps from '../Components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Shipping = ({history}) => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart
    const Navigate = useNavigate()
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
  
    const dispatch = useDispatch()
  
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(saveShippingAddress({ address, city, postalCode, country }))
     Navigate('/payment')
    }


  return (
    <>
    <Header/>
 <div className=''>
      <CheckoutSteps step1 step2 />
      <h1 className='font-segeo text-2xl font-semibold text-center uppercase py-5 tracking-widest '>Shipping</h1>
      <form onSubmit={submitHandler} className='  space-y-8 md:w-2/4 mx-auto py-5  px-5'>
        <div controlId='address' className='flex justify-between'>
          <label className='md:text-xl text-lg font-bold uppercase'>Address</label>
          <input
          className='bg-gray-200 px-5 py-2'
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>

        <div controlId='city' className='flex justify-between'>
          <label className='md:text-xl text-lg font-bold uppercase'>City</label>
          <input
          className='bg-gray-200 px-5 py-2'
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>

        <div controlId='postalCode' className='flex justify-between'>
          <label className='md:text-xl text-lg font-bold uppercase'>Postal Code</label>
          <input
          className='bg-gray-200 px-5 py-2'
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></input>
        </div>

        <div controlId='country' className='flex justify-between'>
          <label className='md:text-xl text-lg font-bold uppercase'>Country</label>
          <input
          className='bg-gray-200 px-5 py-2'
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </div>

        <button type='submit' className='bg-clr w-2/5  text-white py-2'>
          Continue
        </button>
      </form>
    </div>
<Footer/>
    </>
  )
}

export default Shipping