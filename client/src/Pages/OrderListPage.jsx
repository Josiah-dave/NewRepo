import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { listOrders } from '../actions/orderActions'
import { PRODUCT_CREATE_RESET } from '../Constants/productConstants'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Navigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



const OrderListPage = ({ history, match }) => {
    const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
     Navigate('/login')
    }
  }, [dispatch, history, userInfo])


  return (
    <>
<Header/>

{loading ? (
        <Loader />
      ) : error ? (
        <Message text={error}/>
      ) : (
      
        <div class="relative overflow-x-auto px-20 ">
             <h1 className='text-3xl uppercase tracking-widest py-7 font-bold '>users order list</h1>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="  text-base text-gray-700 uppercase bg-clr2">
                <tr>
                    <th scope="col" class="px-6 py-3 border-x border-gray-300">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3 border-x border-gray-300">
                       USER
                    </th>
                    <th scope="col" class="px-6 py-3 border-x border-gray-300">
                        DATE
                    </th>
                    <th scope="col" class="px-6 py-3 border-x border-gray-300">
                       TOTAL
                    </th>
                    <th scope="col" class="px-6 py-3 border-x border-gray-300">
                       PAID
                    </th>
                    <th>DELIVERED</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        
            <tbody>
            {orders.map((order) => (
                  <tr key={order._id} class="bg-white border-b text-black text-base ">
                    <td className='py-2 border-x border-gray-300 px-2'>{order._id}</td>
                    <td className='border-r border-gray-300 px-2'>{order.user && order.user.name}</td>
                    <td className='border-r border-gray-300 px-2'>
                    {order.createdAt.substring(0, 10)}
                    </td>
                    <td className='py-2 border-r border-gray-300 px-2'>
                    ${order.totalPrice}
                    </td>
                    <td className='py-2 border-r border-gray-300 px-2'>
                    {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    "NO"
                    // <i className='fa fa-times' style={{ color: 'red' }}></i>
                  )}
                    </td>
                    <td className='py-2 gap-10 flex border-r border-gray-300 px-2'>
                    {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    "NO"
                    // <i className='fa fa-times' style={{ color: 'red' }}></i>
                  )}
                    </td>

                        <td className='py-2 gap-10  border-r border-gray-300 px-2'>
                        <Link to={`/order/${order._id}`}>
                            <button variant='light' className='bg-clr px-4 py-1 text-white'>
                            Details
                            </button>
                        </Link>
                        </td>
                    {/* <td className='py-2 gap-10 flex border-r border-gray-300 px-2'>
                            <Link to={`/order/${order._id}`}>
                            <button variant='light' className='bg-clr px-3 py-1 text-white'>
                            Details
                            </button>
                        </Link>
                    </td> */}
                  
                  </tr>
                ))}
            </tbody>
        </table>
    </div>

      )}



<Footer/>
    </>
  )
}

export default OrderListPage