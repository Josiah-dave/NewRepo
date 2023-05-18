 import axios, { as } from 'axios';
import React, { useEffect, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Rating from '../Components/Rating';

import Message from '../Components/Message'
import Loader from '../Components/Loader'
// import Meta from '../components/Meta'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../Constants/productConstants'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';





const SingleProduct = ({ history, match }) => {
  const navigate = useNavigate();
  const {id} = useParams()
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate

console.log(product)

  useEffect(() => {
    if (successProductReview) {
      setRating(0)
      setComment('')
    }
    if (!product._id || product._id !== id) {
      dispatch(listProductDetails(id))
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
  }, [dispatch, match, successProductReview])

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(id, {
        rating,
        comment,
      })
    )
  }



  // console.log(product)
  return (
    <>
      <Header/>
      
      {
        loading ? <Loader/> : error ? <Message text={error}/> :<div className='md:p-10 p-5 '>
        <button className='my-5'>
        <Link to={'/Products'} className='bg-gray-300 px-8 py-2 text-black'>Back</Link>
        </button>
   
      {/* <div className='md:flex items-center md:px-28 md:pt-20'>

        <div className='md:w-2/4 shadow-lg'>
          <img src={product.image} alt="" className='w-full md:h-[35rem]'/>
        </div>

        <div className='md:w-1/4 md:p-10 p-5   space-y-5 border shadow-lg'>
            <h1 className='text-3xl font-bold text-gray-800'>{product.name}</h1>
           <h2 className='border-t border-gray-300 pt-3'> <Rating value={product.rating} text={product.numReviews + ' Reviews'} /></h2>
            <p className=' font-bold text-gray-700 text-lg border-y border-gray-300 py-3'>Price: ${product.price}</p>
            <p className=' font-semibold text-gray-700'>Description: {product.description}</p>
        </div>

        <div className='md:w-1/4 p-5 border shadow-lg'>
            <div className='border border-gray-400'>
                  <div className='border-t border-gray-400 flex justify-between px-5 py-3 text-lg font-bold text-gray-700'>
                    <p>Price:</p>
                    <p>${product.price}</p>
                  </div>

                  <div className='border-y border-gray-400 flex justify-between px-5 py-3 text-lg font-bold text-gray-700'>
                    <p>Status:</p>
                    <p>{product.countInStock >0 ? "In Stock" : " Out Of Stock"}</p>
                  </div>

                 {
                  product.countInStock > 0 && (
                    <div className='border-y border-gray-400 flex justify-between px-5 py-3 text-lg font-bold text-gray-700'>
                    <p className='w-50'>Qty:</p>
                      <select className='outline-0 border text-center w-[40%] bg-gray-100' as='select' value={qty} onChange={(e) => setQty(e.target.value)}>{[...Array(product.countInStock).keys()].map((x) => (
                        <option className='bg-gray-300' key={x + 1} value={x + 1}> {x + 1}</option>
                      ))}</select>
                    </div>  
                  )
                 }

                  <div className='px-5 py-3'>                   
                  <button type='button' className='w-full cursor-pointer hover:bg-cyan-900 bg-clr text-white mx-auto my-2 py-4' disabled={product.countInStock === 0} onClick={addToCartHandler}>Add to Cart</button>
                  </div>
              
            </div>
        </div>

      </div> */}

      <div className='md:flex md:px-20'>
        <div className='md:w-3/6'>
        <img src={product.image} alt="" className='w-full md:h-[28rem] '/> 
        <div className='grid grid-cols-3 gap-5  md:gap-10 my-3 overflow-hidden'>
        <img src={product.image} alt="" className='w-full rounded-lg  -scale-100 grayscale'/>
        <img src={product.image} alt="" className='w-full rounded-lg trans  hover:-scale-100'/>
        <img src={product.image} alt="" className='w-full rounded-lg trans hover:-scale-100 grayscale'/>
        </div>
        </div>

        <div className='md:w-1/2 md:p-10  space-y-4  my-10 shadow-lg h-fit p-2'>
        <h2 className='md:tracking-[0.8rem] tracking-widest text-xl pt-3'> <Rating value={product.rating} text={`(${product.numReviews}Reviews)`} /></h2>

    <div className=' '>
    <div className=' space-y-3'>
       <h1 className='md:text-3xl text-2xl tracking-widest font-bold text-gray-800'>{product.name}</h1>
  
       <h3 className='text-lg font-semibold'>Availability ({product.countInStock})</h3>
       </div>

     <div className=' space-y-3'>
        <p className='text-clr text-3xl font-bold'>${product.price}</p>
        <p className=' font-bold text-lg text-gray-700 text-justify'>Description:</p>
        <p className='text-base'>{product.description}</p>
     </div>
    </div>


        {
                  product.countInStock > 0 && (
                    <div className='border-y border-gray-200 md:shadow-lg my-2 flex justify-between px-2 md:px-5 py-3 text-lg font-bold text-gray-700'>
                   <div className='flex items-center border px-2'>
                   <p className=''>Qty:</p>
                      <select className='outline-0 border text-center  bg-gray-100 md:w-32 w-20 ml-3 px-2 p-3' as='select' value={qty} onChange={(e) => setQty(e.target.value)}>{[...Array(product.countInStock).keys()].map((x) => (
                        <option className='bg-gray-300' key={x + 1} value={x + 1}> {x + 1}</option>
                      ))}</select>
                   </div>


                    <div className=''>                   
                  <button type='button' className='w-full cursor-pointer hover:bg-cyan-900 bg-clr text-white mx-auto my-2 py-4 px-5 md:px-10' disabled={product.countInStock === 0} onClick={addToCartHandler}>Add to Cart</button>
                  </div>
                    </div>  
                  )
                 }
     
        </div>
      </div>
      
                     
    </div>

      }

      
      <div>
      <div className=' mx-auto py-10 md:px-20 px-5 bg-blue-50'>
      <h2 className='text-clr font-bold text-2xl tracking-[0.5rem] py-5 uppercase'>Reviews</h2>
      <div className='md:flex justify-between gap-10   space-y-5'>
        <div className='bg-blue-100 p-5 md:w-1/2 leading-7 shadow-lg shadow-gray-300 h-fit'>
        {product.reviews.length === 0 && <Message text={'No Reviews yet'}/>}
          {product.reviews.map((review) => (
            <div key={review._id}>
              <div className='flex items-baseline gap-2 border-b border-clr py-2'>
              <h1 className='bg-clr text-white w-10 h-10 text-center rounded-full text-3xl font-semibold'>{review.name.substring(0, 1)}</h1>
              <strong className='text-xl'>{review.name}</strong>
              </div>
              <Rating value={review.rating} />
              <p className='font-semibold text-clr'>{review.createdAt.substring(0, 10)}</p>
              <p className='tracking-widest'>{review.comment}</p>
            </div>
          ))}
      </div>
          <div className='bg-clr p-5 md:w-1/2'>
            <h2 className=' text-blue-50 text-2xl py-5 '>Leave a  Review</h2>
            {successProductReview && (
              <Message text={' Review submitted successfully'}/>
            )}
            {loadingProductReview && <Loader />}
            {errorProductReview && (
              <Message text={errorProductReview}/>
            )}
            {userInfo ? (
              <form onSubmit={submitHandler}>
                <div controlId='rating'>

                <div controlId='comment' className=' md:flex-col lg:flex'>
                  <label className='text-yellow-300 py-2 text-xl tracking-widest'>Reviw Note:</label>
                  <textarea
                    as='textarea'
                    cols="10"
                     rows="5"
                    className='md:w-2/3 w-full bg-gray-100'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>

                 <div className='md:flex-col lg:flex my-2 space-x-5 md:space-x-0'>
                 <label className='text-yellow-300 py-2 text-xl tracking-widest'>Rating:</label>
                  <select
                  className='w-1/3    bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
               
                    as='select'
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value=''>Select...</option>
                    <option value='1'>1 - Poor</option>
                    <option value='2'>2 - Fair</option>
                    <option value='3'>3 - Good</option>
                    <option value='4'>4 - Very Good</option>
                    <option value='5'>5 - Excellent</option>
                  </select>
                 </div>
                </div>
             
                <button
                  disabled={loadingProductReview}
                  type='submit'
                  className='bg-blue-50 px-20 py-2 tracking-widest hover:bg-clr hover:border-2 hover:text-white border-white trans1 '
                >
                  Submit
                </button>
              </form>
            ) : (
              <Message text={  <Link to='/login' className='bg-dark px-8 py-3'>Please Sign in </Link>  }/>
            )}
          </div>
        </div>
      </div>
    </div>

      <Footer/>
    </>
  )
  
}

export default SingleProduct