import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { listUsers, deleteUser } from '../actions/userActions'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'




const UserlistPage = ({ history }) => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList
  console.log(users)
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete } = userDelete
  
    useEffect(() => {
      if (userInfo && userInfo.isAdmin) {
        dispatch(listUsers()) 
      } else {
        Navigate('/login')
      }
    }, [dispatch, Navigate, history, successDelete, userInfo])
  
    const deleteHandler = (id) => {
      if (window.confirm('Are you sure')) {
        dispatch(deleteUser(id))
      }
    }


  return (
    <div>
        <Header/>
            {loading ? (
                 <Loader />
                    ) : error ? (
                        <Message text={error}/>
                        ) : (
                            <>

<h1 className='text-3xl uppercase tracking-widest py-8 font-bold px-20'>Users</h1>
<div class="relative overflow-x-auto px-20 mb-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="  text-base text-gray-700 uppercase bg-clr2">
            <tr>
                <th scope="col" class="px-6 py-3 border-x border-gray-300">
                    ID
                </th>
                <th scope="col" class="px-6 py-3 border-x border-gray-300">
                   NAME
                </th>
                <th scope="col" class="px-6 py-3 border-x border-gray-300">
                    EMAIL
                </th>
                <th scope="col" class="px-6 py-3 border-x border-gray-300">
                   ADMIN
                </th>
                <th scope="col" class="px-6 py-3 border-x border-gray-300">
                   ACTION
                </th>
             
            </tr>
        </thead>
        {console.log(users)}
        <tbody>
        {users? users.map((user) => (
              <tr key={user._id} class="bg-white border-b text-black text-base ">
                <td className='py-2 border-x border-gray-300 px-2'>{user._id}</td>
                <td className='border-r border-gray-300 px-2'>{user.name}</td>
                <td className='border-r border-gray-300 px-2'>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td className='py-2 border-r border-gray-300 px-2'>
                  {user.isAdmin ? (
                    <i className='fa fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fa fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td className='py-2 gap-10 flex border-r border-gray-300 px-2'>
                  <Link to={`/admin/user/${user._id}/edit`}>
                    <button variant='light' className='btn-sm  bg-green-600 text-white w-10 rounded-lg '>
                      <i className='fa fa-edit'></i>
                    </button>
                  </Link>
                  <button
                    className='btn-sm bg-red-600 text-white w-10 rounded-lg '
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fa fa-trash'></i>
                  </button>
                </td>
              </tr>
            )) : ''}
        </tbody>
    </table>
</div>

                    </>
                )
}
<Footer/>
    </div>
  )
}

export default UserlistPage

{/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th> */}