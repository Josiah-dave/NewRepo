import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createProducts } from '../actions/productActions'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const CreateProduct = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const productCreate = useSelector((state) => state.productCreate)
    const {
      loading,
      error,
      success,
      product,
    } = productCreate

    const uploadFileHandler = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('image', file)
      formData.append('file', file)
     formData.append('upload_preset', 'tpbhzs6w');
     formData.append('cloud_name', 'switch-design');

     setUploading(true);

     fetch('https://api.cloudinary.com/v1_1/switch-design/image/upload', {
       method: 'POST',
       body: formData,
     })
       .then((res) => res.json())
       .then((data) => {
         setUploading(false);
         setImage(data.url);
         console.log(data);
       })
       .catch((err) => {
         console.log(err);
         setUploading(false);
       });
    }

    function submitHandler(){
      dispatch(createProducts(name, price, brand, image, category,countInStock, description))
      if(success){
        setName("")
        setPrice(0)
        setImage("")
        setBrand("")
        setCategory("")
        setCountInStock(0)
        setDescription("")
        setUploading(false)
      }
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

  <h1 className='font-bold text-2xl text-center uppercase'>Create a Product</h1>
  {loading && <Loader />}
  {error && <Message text={error}/>}
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
        Create
      </button>
    </form>
  )}
</div>

<Footer/>
    </>
  )
}

export default CreateProduct
