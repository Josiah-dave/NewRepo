import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from '../actions/orderActions'
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../Constants/orderConstants'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer';

const Order = ({ match, history }) => {
  const orderId = useParams()
  const Navigate = useNavigate()
  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
    console.log(orderDeliver)
  }

  useEffect(() => {
    if (!userInfo) {
      Navigate('/login')
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || successPay || successDeliver || order._id !== orderId.id) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(getOrderDetails(orderId.id))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, orderId, successPay, successDeliver, order, Navigate, userInfo])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId.id, paymentResult))
  }

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }



  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error}/>
  ) : (
   
      <> 
    < Header/>

      <div className='md:p-14 p-5'>
        <h1 className='uppercase font-bold text-lg md:text-2xl bg-clr text-white my-5 p-3'>order {order._id}</h1>

        <div className='md:flex'>
          <div className='md:w-3/5 space-y-9 my-8 bg-slate-50 border-b '>
            <div className='border-b space-y-3'>
                
            <h1 className='text-2xl font-semibold tracking-[5px] uppercase'>DELIVERY</h1>
            <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>

              {order.isDelivered ? (
                <Message text={`Delivered on ${order.deliveredAt.substring(0, 19)}`}/>              
              ) : (
                <Message  text={'Not Delivered'}/>
              )}
              </div>

              <div className='border-b space-y-3 py-2'>
                  <h1 className='text-2xl font-semibold tracking-[5px] uppercase'>payment method</h1>
                  <p>
                    <strong>Method: </strong> {order.paymentMethod}
                  </p>

                  {order.isPaid ? (
                    <Message text={`Paid on ${order.paidAt.substring(0, 19)}`}/>
                  ) : (
                    <Message text={'Not Paid'}/>
                  )}
              </div>

              <div className='border-b space-y-3 py-2'>
                  <h1 className='text-2xl font-semibold tracking-[5px] uppercase'>order items</h1>
                 
                  {order.orderItems.length === 0 ? (
                <Message text={'Order is empty'}/>
              ) : (

                <>
                {order.orderItems.map((item, index)=>(
                  <div key={index} className='md:flex items-center gap-5'>
                      <img   src={item.image}
                            alt={item.name} className='w-[5rem] rounded-xl'/>
                           
                           <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                          
                            <p className='font-semibold '>  {item.qty} x ${item.price} = ${item.qty * item.price}</p>
                  </div>
                ))}
                   
                  </>

              )}
              
              </div>

          </div>
          <div className='md:w-2/5 md:px-32'>

          <div className='border text-center shadow-xl '>
                    <div className='border p-2 py-5'>
                        <h1 className='uppercase text-xl tracking-widest text-center font-bold   font-san'>Order summary</h1>
                    </div>
                    <div className='border py-3 flex justify-between px-5 font-sans text-md font-san'>
                        <p>items:</p>
                        <p>${order.itemsPrice}</p>
                    </div>
                    <div className='border py-3 flex justify-between px-5 font-sans text-md font-san'>
                        <p>Delivery:</p>
                        <p>${order.shippingPrice}</p>
                    </div>
                    <div className='border py-3 flex justify-between px-5 font-sans text-md font-san'>
                        <p>Tax:</p>
                        <p>${order.taxPrice}</p>
                    </div>
                    <div className='border py-3 flex justify-between px-5 text-md  font-sans'>
                        <p>Total:</p>
                        <p>${order.totalPrice}</p>
                    </div>

                    <>
                    {!order.isPaid && (
                <div>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </div>
              )}
                    </>

                    {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <div>
                    <button
                      type='button'
                      className='bg-clr w-4/5 text-white py-3 my-2'
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </button>
                  </div>
                )}
            
                </div>
          </div>
        </div>

      </div>

<Footer/>
    </>
  )
  }

  export default Order