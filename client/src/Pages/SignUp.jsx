
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Page from '../Components/Page';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
// import FormContainer from '../Components/FormContainer'
import { register } from '../actions/userActions'
import { useNavigate } from "react-router-dom";
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'


const SignUp = ({history}) => {

  const navigate = useNavigate();
  const location = useLocation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

    const [isOPen, setIsopen] = useState(true);

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }


  return (
    <>
    <Header/>
    <Page tag={"create an account"}/>
    <div className='w-full p-10 text-center  border-b-2 border-clr '>


        <form action="" className='max:w-4/6 lg:w-2/6 desktop:w-2/6 xl:w-2/6 mx-auto space-y-5' onSubmit={submitHandler}>
            <h1 className='text-center text-4xl tracking-widest mb-3 uppercase'>Sign Up</h1>

            {message && <Message  text={message}/>}
            {error && <Message  text={error}/>}
            {loading && <Loader />}


            <input  className='w-full rounded-3xl py-3 px-2 outline-none border border-gray-500' type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)} required />

            <input type="email" className='w-full rounded-3xl py-3 px-2 outline-none border border-gray-500'  
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} required />

            <input type="password"  className='w-full rounded-3xl py-3 px-2 outline-none border border-gray-500'         
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} required/>

            <input type={isOPen ? "password" : "text"}  className='w-full relative rounded-3xl py-3 px-2 outline-none border border-gray-500'         
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} required/>

            <i class={isOPen ? "fa fa-eye-slash cursor-pointer text-lg bg-gray-200 p-2 rounded-lg absolute md:top-[44.5rem] md:right-[] right-14 top-[33rem] xl:right-[15rem] desktop:right-[35rem] desktop:top-[43rem] max:right-[11rem] " : "fa fa-eye cursor-pointer text-lg bg-gray-200 p-2 rounded-lg absolute md:top-[44.5rem] md:right-[] right-14 top-[33rem] xl:right-[15rem] desktop:right-[35rem] desktop:top-[43rem] max:right-[11rem] "} aria-hidden="true" onClick={() => setIsopen(!isOPen)} ></i>
       
           

     <h4 className='text-center'>   <Link to="/Reset" className='text-clr '>Forgot your password</Link></h4>
     <button className='bg-clr py-3 text-white upp
      px-10 rounded-3xl mr-5 uppercase' type='submit'>Create</button>

          Have an Account?{' '}
          <Link className="text-clr " to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>


        </form>
    </div>
    <Footer/>

    </>
  )
}

export default SignUp