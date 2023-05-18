import axios from 'axios'
import React, { useState, useEffect } from 'react'
  import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
  import { useDispatch, useSelector } from 'react-redux'
  import Message from '../Components/Message'
  import Loader from '../Components/Loader'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../Constants/productConstants'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const ProductEditpage = ({ match, history }) => {
  const {id} =  useParams()
  const productId = id
  const Navigate = useNavigate()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      Navigate('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
      }
    }
  }, [dispatch, Navigate, history, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data.url)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    )
  }


  return (
    <>

<Header/>

      <div className='bg-gray-50 p-10'>
        <button className='bg-clr px-7 text-white trans1 hover:px-10 py-2 my-5'>
      <Link to='/admin/productlist' >
        Go Back
      </Link>

        </button>


        <h1 className='font-bold text-2xl text-center uppercase'>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message text={errorUpdate}/>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message text={error}/>
        ) : (
          <form onSubmit={submitHandler} className='w-2/4 mx-auto grid grid-cols-2 border p-2 my-5 space-y-2 space-x-7'>
            <div className=''>
              <label className='text-xl px-2'>Name:</label>
              <input
              className='border p-2 ml-2 w-full'
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div className=''>
              <label className='text-xl px-2'>Price</label>
              <input
                 className='border p-2 ml-2 w-full'
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>

            <div >
              <label className='text-xl px-2'>Image</label>
              <input
               type='text'
               className='border p-2 ml-2 w-full'
               placeholder='Enter image url'
               value={image}
               onChange={(e) => setImage(e.target.value)}
              ></input>
              <input
               className='border p-2 ml-2 w-full'
               id='image-file'
               label='Choose File'
               type={'file'}
               custom
               onChange={uploadFileHandler}
             ></input>
             {uploading && <Loader />}
            </div>

            <div controlId='brand'>
              <label className='text-xl px-2'>Brand</label>
              <input
               className='border p-2 ml-2 w-full'
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
            </div>

            <div controlId='countInStock'>
              <label className='text-xl px-2'>Count In Stock</label>
              <input
               className='border p-2 ml-2 w-full'
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div>

            <div controlId='category'>
              <label className='text-xl px-2'>Category</label>
              <input
               className='border p-2 ml-2 w-full'
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>

            <div className=''>
              <label className='text-xl px-2'>Description</label>
              <input
               className='border p-2 ml-2 w-full'
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>

            <button type='submit' className='bg-clr px-10 py-3 text-white'>
              Update
            </button>
          </form>
        )}
      </div>

<Footer/>
    </>
  )
}

export default ProductEditpage