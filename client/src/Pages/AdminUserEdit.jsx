import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { getUserDetails, updateUser } from '../actions/userActions'
import { USER_UPDATE_RESET } from '../Constants/userConstants'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'




const AdminUserEdit = ({match, history}) => {

  const {id} =  useParams()
  const userId = id
  const Navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails
    console.log(userDetails)
  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      Navigate('/admin/userlist')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, Navigate, history, userId, user, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: userId, name, email, isAdmin }))
  }

  return (
    <div className=''>
        <Header/>

<button className='bg-clr  text-white py-3 px-5 mx-2 my-2'>

        <Link to='/admin/userlist' >
        Go Back
      </Link>
</button>
     
        <h1 className='text-center font-bold text-2xl uppercase'>Edit User</h1>
      <div className='my-5 md:w-1/3 mx-auto border md:p-4 p-8'>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message text={errorUpdate}/>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message text={error}/>
        ) : (
            <form onSubmit={submitHandler} className='space-y-6'>
            <div >
              <label className='text-xl px-2'>Name</label>
              <input
              className='border p-2 ml-2 w-full bg-gray-100'
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div>
              <label className='text-xl px-2'>Email Address</label>
              <input
              className='border p-2 ml-2 w-full bg-gray-100'
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div >
              <label htmlFor="" className='text-xl px-2'>Make admin</label>
              <input
              className='border p-2'
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></input>
            </div>

            <button type='submit' className='bg-clr px-5 py-2 text-white'>
              Update
            </button>
          </form>
        )}
      </div>

        <Footer/>
    </div>
  )
}

export default AdminUserEdit