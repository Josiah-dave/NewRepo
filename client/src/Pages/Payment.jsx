import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import FormContainer from '../Components/FormContainer'
import CheckoutSteps from '../Components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import Header from '../Components/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'



const Payment = ({history}) => {
 
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart
    const Navigate = useNavigate()
    if (!shippingAddress.address) {
      Navigate('/shipping')
    }
  
    const [paymentMethod, setPaymentMethod] = useState('PayPal')
  
    const dispatch = useDispatch()
  
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(savePaymentMethod(paymentMethod))
      Navigate('/placeOrder')
    }


  return (
    <>
    <Header/>
       <div className='text-center'>
      <CheckoutSteps step1 step2 step3 />
      <h1 className='font-segeo text-2xl font-semibold text-center uppercase py-5 tracking-widest'>Payment Method</h1>
      <form onSubmit={submitHandler}  className='  space-y-8 md:w-2/4 mx-auto py-5 bg-gray-200'>
        <div className='md:w-2/4 mx-auto md:px-10 px-16 space-y-5'>
          {/* <label as='legend'>Select Method</label> */}
          <div className='flex justify-between'>
            <label htmlFor=""><i class="fa fa-paypal text-clr fa-2x mr-5" aria-hidden="true"></i> PAYPAL</label>
            <input
           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
        
         
          </div>

          <div className='flex justify-between'>
            <label htmlFor=""><i class="fa fa-cc-visa  text-clr fa-2x mr-5" aria-hidden="true"></i> VISA</label>
            <input
         class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
          </div>
        </div>

        <button type='submit' className='bg-clr w-2/5  text-white py-2' >
          Continue
        </button>
      </form>
    </div>

<Footer/>
    </>
  )
}

export default Payment