import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
// import Paginate from '../Components/Paginate'
import {
  listProducts,
  deleteProduct,
  createProducts,
} from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../Constants/productConstants'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const AdminProductList = ({ history, match }) => {
    const navigate = useNavigate()
    const number = useParams()
    const pageNumber = number.pageNumber || 1

    const dispatch = useDispatch()
  
    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList
  
    const productDelete = useSelector((state) => state.productDelete)
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = productDelete
  
    const productCreate = useSelector((state) => state.productCreate)
    const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      product: createdProduct,
    } = productCreate
  
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
      dispatch({ type: PRODUCT_CREATE_RESET })
  
      if (!userInfo || !userInfo.isAdmin) {
        navigate('/login')
      }
      if (successCreate) {
        navigate(`/admin/product/${createdProduct._id}/edit`)
      } else {
        dispatch(listProducts('', pageNumber))
      }
  
    }, [
      dispatch,
      navigate,
      history,
      userInfo,
      successDelete,
      successCreate,
      createdProduct,
      pageNumber,
    ])
  
    const deleteHandler = (id) => {
      if (window.confirm('Are you sure')) {
        dispatch(deleteProduct(id))
      }
    }
  
    const createProductHandler = () => {
      dispatch(createProducts())
    }

    
  return (
    <>
        <Header/>


      {loadingDelete && <Loader />}
      {errorDelete && <Message text={errorDelete}/>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message text={errorCreate}/>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message text={error}/>
      ) : ( 

        <>
      <div className='flex justify-between px-2 md:px-20 py-5'>
        <h1 className='md:text-3xl uppercase tracking-widest py-2 font-bold '>product list</h1>

        <Link to="/admin/product/create" className='my-3 bg-clr md:px-8 px-2 py-3 text-white'>
          <i className='fa fa-plus'></i> Create Product
        </Link>
        {/* <button className='my-3 bg-clr md:px-8 px-2 text-white' onClick={createProductHandler}>
          <i className='fa fa-plus'></i> Create Product
        </button> */}
      </div>

<div class="relative overflow-x-auto md:px-20 px-5 ">
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
                    PRICE
                </th>
                <th scope="col" class="px-6 py-3 border-x border-gray-300">
                   CARTEGORY
                </th>
                <th scope="col" class="px-6 py-3 border-x border-gray-300">
                   BRAND
                </th>
                <th></th>
            </tr>
        </thead>
    
        <tbody>
        {products.map((product) => (
              <tr key={product._id} class="bg-white border-b text-black text-base ">
                <td className='py-2 border-x border-gray-300 px-2'>{product._id}</td>
                <td className='border-r border-gray-300 px-2'>{product.name}</td>
                <td className='border-r border-gray-300 px-2'>
                ${product.price}
                </td>
                <td className='py-2 border-r border-gray-300 px-2'>
                {product.category}
                </td>
                <td className='py-2 border-r border-gray-300 px-2'>
                {product.brand}
                </td>
                <td className='py-2 gap-10 flex border-r border-gray-300 px-2'>
                <Link to={`/admin/product/${product._id}/edit`}>
                      <button  className='bg-green-500 text-white w-7'>
                        <i className='fa fa-edit'></i>
                      </button>
                </Link>
                    <button
                    
                      className='bg-red-600 text-white w-7'
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className='fa fa-trash'></i>
                    </button>
                </td>
              </tr>
            ))}
        </tbody>
    </table>
</div>
        </>



      )}

        <Footer/>
    </>
  )
}

export default AdminProductList


