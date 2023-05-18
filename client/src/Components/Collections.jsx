import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import Rating from "../Components/Rating";
import { Link, useParams } from "react-router-dom";
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
// import Product from '../components/Product'
import Message from "./Message";
import Loader from "./Loader";
// import Paginate from '../components/Paginate'
// import ProductCarousel from '../components/ProductCarousel'
// import Meta from '../components/Meta'
import { listProducts } from "../actions/productActions";
import loading from "../Shopping/loading.gif";

const Collections = ({ match }) => {
  const params = useParams();
  const keyword = params.keyword;

  const pageNumber = params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  console.log(products);
  return (
    <>
      {/* Product grid */}
      <div className=" py-10 px-5">
        <h1 className="text-4xl text-center">TRENDY COLLECTION</h1>
        <p className="text-sm text-gray-700 md:text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          dolores!
        </p>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message text={error} />
        ) : (
          <div className="grid md:grid-cols-4 py-5 gap-4">
            {products.map((product) => (
              <div
                key={product._id}
                className=" shadow-2xl shadow-zinc-300 hover:shadow-xl hover:shadow-zinz-200 md:h-auto py-3"
              >
                <div className="p-4 group">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt=""
                      className=" w-full trans  grayscale group-hover:grayscale-0 rounded-sm h-full     group-hover:scale-105"
                    />
                    {/* <p className="bg-red-600 px-3 py-2 group-hover:bg-clr text-white absolute top-2 right-2">Hot</p> */}
                  </div>

                  <div className="space-y-2">
                    <h3 className="md:text-xl text-lg font-segoe font-semibold py-2 tracking-tight text-gray-800">
                      {product.name}
                    </h3>

                    <p className="font-semibold text-gray-500 text-xl tracking-tight">
                      ${product.price}
                    </p>

                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>

                    <button className="border border-gray-300 w-full py-4 group-hover:bg-clr trans group-hover:text-white">
                    <Link to={`/product/${product._id}`} >
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i> ADD
                      TO CART
                    </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Collections;

{
  /* <Link to={`/product/${product._id}`}>
<img src={product.image} alt="" className='w-full rounded-xl' />
<div className='px-5'>
  <h3 className='md:text-xl text-lg font-mono font-bold py-2 text-gray-800'>{product.name}</h3>

  <p className='font-bold text-clr text-xl'>${product.price}</p>

   </div>
</Link>
  <div className='flex justify-start px-5  '>
      <FaShoppingCart className='text-2xl text-zinc-800 mr-3'/>
    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>

  </div> */
}
