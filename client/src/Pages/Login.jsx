import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
// import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Page from '../Components/Page'
import {  useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = ({history}) => {
  const navigate = useNavigate();
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    // if(error){
    //   toast.error(error)
    // }
    if (userInfo) {
      navigate(redirect)
    }
  }, [history, userInfo, redirect, navigate])

  const submitHandler = (e) => {
    if(error){
      toast.error(error)
    }
    e.preventDefault()
    dispatch(login(email, password))
    
  }



  return (
    <>
<Header/>
<Page tag={"Sign in  here"}/>
            {/* {error && <Message text={error}/>} */}
    <div className='w-full p-10 text-center'>
        <form action="" className='md:w-2/6 mx-auto space-y-5' onSubmit={submitHandler}>
            <h1 className='text-center text-4xl tracking-widest mb-3'>LOGIN</h1>
              {loading && <Loader />}


            <input type="email" className='w-full rounded-3xl py-3 px-2 outline-none border border-gray-500'  required 
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <input type="password"  className='w-full rounded-3xl py-3 px-2 outline-none border border-gray-500' 
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} required/>

            <h4 className='text-center'>   <Link to="./Reset" className='text-clr '>Forgot your password</Link></h4>
            <button className='bg-clr py-3 text-white upp
              px-10 rounded-3xl mr-5 uppercase'>LoGIN</button>

                New Customer?{' '}
            <Link to={redirect ? `/Signup?redirect=${redirect}` : '/Register'} className="text-clr " >Create an account</Link>

        </form>
    </div>
<Footer/>
    </>
  )
}

export default Login