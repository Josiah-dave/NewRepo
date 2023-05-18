import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader';
import Message from './Message';
import Rating from './Rating'
import { listProducts } from "../actions/productActions";
import { useSelector } from 'react-redux';

const Product = ({product}) => { 
    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;
    return (
      <div>
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
    );
}



export default Product