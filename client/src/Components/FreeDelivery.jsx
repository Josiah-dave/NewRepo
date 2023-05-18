import React from 'react'

import service1 from '../Shopping/services1.svg'
import service2 from '../Shopping/services2.svg'
import service3 from '../Shopping/services3.svg'
import service4 from '../Shopping/services4.svg'

const FreeDelivery = () => {
  return (
    <>
  {/* Security */}
  <div className='md:flex py-6 justify-center px-6 md:space-y-0 space-y-5  bg-white'>
            <div className='md:w-1/6 mx-auto border-2 border-clr hover:shadow-2xl shadow-slate-700 p-5'>
              <img src={service1} alt="" />
              <h4 className='text-xl font-medium'>Fast & Free Delivery</h4>
              <p className='text-black text-sm'>Free delivery on all orders</p>
            </div>

            <div className='md:w-1/6 mx-auto border-2 border-clr hover:shadow-2xl shadow-slate-700 p-5'>
              <img src={service2} alt="" />
              <h4 className='text-xl font-medium'>Secure Payment</h4>
              <p className='text-black text-sm'>Free delivery on all orders</p>
            </div>

            <div className='md:w-1/6 mx-auto border-2 border-clr hover:shadow-2xl shadow-slate-700 p-5'>
              <img src={service3} alt="" />
              <h4 className='text-xl font-medium'>Money Back Guarantee</h4>
              <p className='text-black text-sm'>Free delivery on all orders</p>
            </div>

            <div className='md:w-1/6 mx-auto border-2 border-clr hover:shadow-2xl shadow-slate-700 p-5'>
              <img src={service4} alt="" />
              <h4 className='text-xl font-medium'>Online Support</h4>
              <p className='text-black text-sm'>Free delivery on all orders</p>
            </div>


          </div>
    </>
  )
}

export default FreeDelivery