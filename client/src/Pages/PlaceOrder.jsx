import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import CheckoutSteps from '../Components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../Constants/orderConstants'
import { USER_DETAILS_RESET } from '../Constants/userConstants'
import Header from '../Components/Header'
import Footer from '../Components/Footer';

const PlaceOrder = ({history}) => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const cart = useSelector((state) => state.cart)
  
    if (!cart.shippingAddress.address) {
      Navigate('/shipping')
    } else if (!cart.paymentMethod) {
      Navigate('/payment')
    }
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }
  
    cart.itemsPrice = addDecimals(
      cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
    cart.totalPrice = (
      Number(cart.itemsPrice) +
      Number(cart.shippingPrice) +
      Number(cart.taxPrice)
    ).toFixed(2)
  
    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate
    useEffect(() => {
      if (success) {
      
        Navigate(`/order/${order._id}`)
        dispatch({ type: USER_DETAILS_RESET })
        dispatch({ type: ORDER_CREATE_RESET })
      }
      // eslint-disable-next-line
    }, [history, success])
  
    const placeOrderHandler = () => {
      dispatch(
        createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        })
      )
    }

  return (
    <>

        <Header/>
        <CheckoutSteps step1 step2 step3 step4/>

        <div className='md:px-20 px-5 md:flex items-center'>

            <div className='md:w-5/6 p-10 px-5 md:px-28 space-y-9'>
                <div className='border-b border-b-gray-200 py-2 space-y-3'>
                    <h1 className='text-2xl font-semibold tracking-[5px] uppercase'>DELIVERY</h1>
                    <p className=' text-lg '> <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}</p>
                </div>
                <div className='border-b border-b-gray-200 py-2 space-y-3'>
                    <h1 className='text-2xl font-semibold tracking-[5px] uppercase'>payment method</h1>
                    <p className=' text-lg '><strong strong>Method: </strong>
              {cart.paymentMethod}</p>
                </div>

                {cart.cartItems.length === 0 ? (
                <Message text={'Your Cart is empty'}/>
              ) : (
                <>
                            <div className=' py-2 space-y-3' >
                            <h1 className='text-2xl font-semibold tracking-[5px] uppercase'>order items</h1>
                {cart.cartItems.map((item, index) => (
                          <div className='flex justify-between items-center border-b border-b-gray-200 py-3' key={index}>

                            <img  src={item.image}
                            alt={item.name} className='w-[5rem] rounded-xl mr-2'/>
                            <Link to={`/product/${item.product}`}>
                            {item.name}

                          </Link>
                            <p className='font-semibold '> {item.qty} x ${item.price} = ${item.qty * item.price}</p>
        
                          </div>
                  ))}
                          </div>
                </>
              )}
            </div>




            <div className='md:w-2/6 md:p-10 p-5'>
                <div className='border text-center shadow-xl'>
                    <div className='border p-2 py-5'>
                        <h1 className='uppercase text-xl tracking-widest text-center font-bold   font-san'>Order summary</h1>
                    </div>
                    <div className='border py-3 flex justify-between px-5 font-sans text-md font-san'>
                        <p>items:</p>
                        <p>${cart.itemsPrice}</p>
                    </div>
                    <div className='border py-3 flex justify-between px-5 font-sans text-md font-san'>
                        <p>Delivery:</p>
                        <p>${cart.shippingPrice}</p>
                    </div>
                    <div className='border py-3 flex justify-between px-5 font-sans text-md font-san'>
                        <p>Tax:</p>
                        <p>${cart.taxPrice}</p>
                    </div>
                    <div className='border py-3 flex justify-between px-5 text-md  font-sans'>
                        <p>Total:</p>
                        <p>${cart.totalPrice}</p>
                    </div>

                    {error && <Message  text={error}/>}
                    <button className='bg-clr text-white hover:text-blue-100 w-11/12 mx-auto py-3 trans my-2 hover:shadow-xl'  type='button'
            
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}>Place order</button>
                </div>
            </div>


        </div>

<Footer/>
    </>
  )
}

export default PlaceOrder