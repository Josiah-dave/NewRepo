import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Page from '../Components/Page'
import  { useEffect } from 'react'
import { Link, Navigate, useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions'




const CartPage = ({match}) => {
  const Navigate = useNavigate()
  const {id} = useParams()
  const location = useLocation()
  const productId = id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  console.log(qty)
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    Navigate('/login?redirect=/shipping')
  }





  return (
    <>
    <Header/>
    <Page tag={' SHOPPING CART'}/>


    {
      cartItems.length === 0 ? <Message text={'Your Cart is empty'}/> : 
    (
      <div className='md:p-20 py-5 pl-2 md:flex'>

     <div className='md:w-[70%]'>

     {
        cartItems.map(item => (
          <div className='grid grid-cols-5 gap-1 md:gap-9 items-center mb-5' key={item.product}>
          <div>
            <img src={item.image} alt={item.name} className='w-full rounded-lg' />
          </div>
          <div>
            <Link to={`/product/${item.name}`} className='md:text-lg font-semibold'>{item.name}</Link>
          </div>
          <div><h4 className=' font-semibold md:text-lg mr-10'>${item.price}</h4></div>
          <div>
          <select className='outline-0 border text-center w-[70%] bg-gray-100 py-2' as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product , Number(e.target.value)))}>{[...Array(item.countInStock).keys()].map((x) => (
                        <option className='bg-gray-300' key={x + 1} value={x + 1}> {x + 1}</option>
                      ))}</select>
          </div>
          <div>
            <button type='button' className='bg-gray-200 md:px-10 px-4 py-2 font-xl rounded-lg hover:bg-gray-300' onClick={()=> removeFromCartHandler(item.product)}>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
  
        </div>
        ))
      }
     </div>

      

      <div className='md:w-[30%] border leading-10 p-5 h-fit'>
        <h1 className='text-lg '>SUBTOTAL ({cartItems.reduce((a,item)=> a + item.qty, 0)}) ITEMS</h1>
        <p className='font-bold text-xl leading-loose my-3'>${cartItems.reduce((a,item)=> a + item.qty * item.price, 0).toFixed(2)}</p>

        <div className='w-full border-t p-2'>
          <button className='bg-clr w-full text-white font-mono cursor-pointer py-3' type='button' disabled={cartItems.length === 0} onClick={checkoutHandler}>PROCEED TO CHECKOUT</button>
        </div>


      </div>

    </div>
    )
    }


   


    
    <Footer/>
    </>
  ) 
}

export default CartPage