import React from 'react'
import { Link } from 'react-router-dom'


const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <ul className='justify-evenly mb-4 flex bg-clr text-white py-3'>
      <li>
        {step1 ? (
          <Link to='/Login'>
            <Link className='text-blue-100 font-semibold'>Sign In</Link>
          </Link>
        ) : (
          <Link disabled className=' pointer-events-none text-gray-300'>Sign In</Link>
        )}
      </li>

      <li>
        {step2 ? (
          <Link to='/shipping'>
            <Link className='text-blue-100 font-semibold'>Shipping</Link>
          </Link>
        ) : (
          <Link disabled className=' pointer-events-none text-gray-300'>Shipping</Link>
        )}
      </li>

      <li>
        {step3 ? (
          <Link to='/payment'>
            <Link className='text-blue-100 font-semibold'>Payment</Link>
          </Link>
        ) : (
          <Link disabled className=' pointer-events-none text-gray-300'>Payment</Link>
        )}
      </li>

      <li>
        {step4 ? (
          <Link to='/placeorder'>
            <Link className='text-blue-100 font-semibold'>Place Order</Link>
          </Link>
        ) : (
          <Link disabled className=' pointer-events-none text-gray-300'>Place Order</Link>
        )}
      </li>
    </ul>
  )
}

export default CheckoutSteps
