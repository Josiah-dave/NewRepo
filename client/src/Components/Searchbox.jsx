import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom'
import { listProducts } from '../actions/productActions';



const SearchBox = ({ history, match }) => {
  
  const Navigate = useNavigate()
  const [keyword, setKeyword] = useState('')
  const {id} = useParams()
  const keywordParams = id
  // const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, } = productList

  console.log(products)

  useEffect(() => {
      dispatch(listProducts(keywordParams,))
  }, [dispatch, keywordParams,])

  const submitHandler = (e) => {
      e.preventDefault()
      if (keyword.trim()) {
          Navigate(`/search/${keyword}`)
      } else {
         Navigate('/search')
      }
  }


  return (


    <form onSubmit={submitHandler} inline>
      <input
      disabled
      type='search'
      placeholder='Search for...'
      onChange={(e) => setKeyword(e.target.value)}
      className=" pl-10 rounded-md text-black trans pr-2 w-[17rem] outline-clr3 py-2 group border-[1px] border-gray-700"
      ></input>
      <button type='submit' variant='outline-success' className="absolute  top-0 left-0 text-white bg-clr h-full w-8 p-1  rounded-l-md group-hover:bg-gray-700 trans">
       <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </form>
  )
}

export default SearchBox

