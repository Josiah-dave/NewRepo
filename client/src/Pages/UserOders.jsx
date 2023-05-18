import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../Constants/userConstants'
import { useNavigate } from "react-router-dom";
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const UserOders = ({history, location}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
  
    const dispatch = useDispatch()
  
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails
  
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile
  
    const orderListMy = useSelector((state) => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy
  
    useEffect(() => {
      if (!userInfo) {
        Navigate('/login')
      } else {
        if (!user || !user.name || success) {
          dispatch({ type: USER_UPDATE_PROFILE_RESET })
          dispatch(getUserDetails('profile'))
          dispatch(listMyOrders())
        } else {
          setName(user.name)
          setEmail(user.email)
        }
      }
    }, [dispatch, history, userInfo, user, success])
  
    const submitHandler = (e) => {
      e.preventDefault()
      if (password !== confirmPassword) {
        setMessage('Passwords do not match')
      } else {
        dispatch(updateUserProfile({ id: user._id, name, email, password }))
      }
    }
  return (
    <>
    <Header/>

    {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message text={errorOrders}/>
        ) : (
                <div>
<h1 className='font-segeo text-xl md:text-4xl font-semibold text-center uppercase py-5 md:py-8'>My Orders</h1> 
            <div class="flex items-center justify-center md:w-4/5 mx-auto">

            <div class="container">
                 {orders.map((order) => (
                <table class="w-full lg:flex-none flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 shadow-lg">
                    <thead class="text-white">
                        <tr class="bg-clr lg:flex-none flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th class="p-3 text-left">ID</th>
                            <th class="p-3 text-left">DATE</th>
                            <th class="p-3 text-left">TOTAL</th>
                            <th class="p-3 text-left">PAID</th>
                            <th class="p-3 text-left">DELIVERED</th>
                            <th class="p-3 text-left py-6" width="110px"></th>
                           
                        </tr>
                      
                        
                    </thead>
                    <tbody class="flex-1 lg:flex-none sm:flex-none">
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0" key={order._id} >
                            <td class="border-grey-light border hover:bg-gray-100 p-3">{order._id}</td>
                            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{order.createdAt.substring(0, 10)}</td>
                            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{order.totalPrice}</td>
                            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fa fa-times text-red-700' ></i>
                    )}</td>
                            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fa fa-times text-red-700' ></i>
                    )}</td>
                            <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"> <Link to={`/order/${order._id}`}>
                      <button className='bg-clr px-4 py-1 text-white' variant='light'>
                        Details
                      </button>
                    </Link></td>
                        </tr>
                       
                    </tbody>
                </table>
                ))}
            </div>
        </div>
                </div>
                    
       
        )}




    <Footer/>




    </>
  )
}

export default UserOders