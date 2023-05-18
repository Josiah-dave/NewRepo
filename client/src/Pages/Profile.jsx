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
import Header from '../Components/Header'
import Footer from '../Components/Footer'



const Profile = ({history, location}) => {
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
        <div className=' py-5 justify-between'>
                <div className='md:w-3/6 px-10 py-5 mx-auto bg-gray-100 shadow-2xl'>
    <h1 className='font-segeo text-2xl font-semibold text-center uppercase py-5'>User Profile</h1>


    {message && <Message text={message}/>}
        {success  && <Message text='Profile Updated'/>}
        {success ? console.log(true) : console.log(false)}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message text={error}/>
        ) : (

<form onSubmit={submitHandler} className='  space-y-8'>
            <div controlId='name' className='flex justify-between'>
              <label className='text-lg font-bold uppercase'>Name:</label>
              <input
              className='bg-gray-200 px-5 py-2'
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div controlId='email' className='flex justify-between'>
              <label className='text-lg font-bold uppercase'>Email Address</label>
              <input
                  className='bg-gray-200 px-5 py-2'
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div controlId='password' className='flex justify-between'>
              <label className='text-lg font-bold uppercase'>Password</label>
              <input
                  className='bg-gray-200 px-5 py-2'
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div controlId='confirmPassword' className='flex justify-between'>
              <lable className='text-lg font-bold uppercase'>Confirm Password</lable>
              <input
                  className='bg-gray-200 px-5 py-2'
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type='submit' className='bg-clr w-2/5  text-white py-2'>
              Update
            </button>
          </form>

                
        )}

         </div>







    <div className='md:w-5/6 relative overflow-x-auto px-10 mx-auto ' >
{/* 
    <h1 className='font-segeo text-2xl font-semibold text-center uppercase py-5'>My Orders</h1> */}


            {/* {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message text={errorOrders}/>
        ) : (


          <div class="relative overflow-x-auto px-20 ">
          <table className=' border-collapse w-full text-sm text-left '>
            <thead border>
              <tr className='grid grid-cols-6 gap-10 bg-clr text-white p-3 text-center items-center'>
                <th scope="col" class="px-2 py-3 border-x border-gray-300">ID</th>
                <th scope="col" class="px-2 py-3 border-r border-gray-300">DATE</th>
                <th scope="col" class="px-2 py-3 border-r border-gray-300">TOTAL</th>
                <th scope="col" class="px-2 py-3 border-r border-gray-300">PAID</th>
                <th scope="col" class="px-2 py-3 border-r border-gray-300">DELIVERED</th>
                <th scope="col" class="px-2 py-3 border-r border-gray-300"></th>
              </tr>
            </thead>
            <tbody className=''>
              {orders.map((order) => (
                <tr key={order._id} className='grid grid-cols-6 gap-28'>
                  <td className='py-2  border-gray-300 px-2'>{order._id}</td>
                  <td className='py-2  border-gray-300 px-2'>{order.createdAt.substring(0, 10)}</td>
                  <td className='py-2  border-gray-300 px-2'>{order.totalPrice}</td>
                  <td className='py-2  border-gray-300 px-2'>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fa fa-times text-red-700' ></i>
                    )}
                  </td>
                  <td className='py-2  border-gray-300 px-2'>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fa fa-times text-red-700' ></i>
                    )}
                  </td>
                  <td className='py-2  border-gray-300 px-2'>
                    <Link to={`/order/${order._id}`}>
                      <button className='bg-clr px-4 py-1 text-white' variant='light'>
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          </div>
        )} */}
                </div>
        </div>
<Footer/>
    </>
  )
}

export default Profile