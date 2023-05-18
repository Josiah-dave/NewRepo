import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import {Link, useNavigate} from 'react-router-dom'
// import { Pagination } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap' 

import Footer from '../Components/Footer'
import Collections from '../Components/Collections';
import { useParams } from 'react-router-dom'
import Product from '../Components/Products'
import Header from '../Components/Header'

const SearchScreen = ({history, match}) => {

    const Navigate = useNavigate()
    const [keyword, setKeyword] = useState('')
    const params = useParams();
    const keywordParams = params.keyword;
    // const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, } = productList

    useEffect(() => {
        dispatch(listProducts(keywordParams))
    }, [dispatch, keywordParams])

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            Navigate(`/search/${keyword}`)
        } else {
           Navigate('/search')
        }
    }
// console.log(keywordParams)
    return (
      <>
      <Header/>
        {/* <Meta title='Search For...' /> */}
        <section className='px-10'>
          <div className=''>

            <div className='row justify-content-center'>
              <div id='md:w-3/6 py-10'>
                <form className='mx-auto py-10 md:w-4/5' onSubmit={submitHandler}>
                  <input
                    className='w-4/5 px-2 py-2 group border-[1px] border-gray-700 rounded-md'
                    type='search'
                    placeholder='Search for...'
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button className='bg-clr py-3 text-white  w-1/5' type='submit'>
                    Search
                  </button>
                </form>
              </div>
            </div>
            <hr />

           
            <div className='mb-5'>
              {keywordParams ? (
       
                <div>
                  <h5 className='mb-4'>
                    Search results for{' '}
                    <span className='section-intro__style'>{keyword}</span>
                  </h5>
                  {loading ? (
                    <Loader />
                  ) : error ? (
                    <Message text={error}/>
                  ) :
                  error  ? (<Message text={'Product not found'}/>): (
                    <>
                      <div className='row card-row'>
                        {products.map((product) => (
                          <div
                            className='col-md-6 col-lg-4 col-xl-3'
                            key={product._id}
                          >



                            <Product product={product} />
                          
                          </div>
                        ))}
                      </div>
                      {/* <div className='rr'>
                        {pages > 1 && (
                          <Pagination>
                            {[...Array(pages).keys()].map((x) => (
                              <LinkContainer
                                key={x + 1}
                                to={`/search/${keyword}/page/${x + 1}`}
                              >
                                <Pagination.Item active={x + 1 === page}>
                                  {x + 1}
                                </Pagination.Item>
                              </LinkContainer>
                            ))}
                          </Pagination>
                        )}
                      </div> */}
                    </>
                  )}
                </div>
              ) : (
                <div className='text-center'>
                  <p>Your search results will appear here.</p>
                </div>
              )}
            </div>
            {/* <section className='container'>
              <div className=' categories-search'>
                <h5>Popular Brand</h5>
                <div className='row '>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-4'>
                    <Link to='/categories/rolex'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/rolex.jpg'
                          alt='Rolex Category'
                          title='Rolex'
                        />
                      </div>
                    </Link>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-3'>
                    <Link to='/categories/breitling'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/breitling.jpg'
                          alt='Breitling Category'
                          title='Breitling'
                        />
                      </div>
                    </Link>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-4'>
                    <Link to='/categories/dior'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/christian-dior.jpg'
                          alt='Dior Category'
                          title='Dior'
                        />
                      </div>
                    </Link>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-4'>
                    <Link to='/categories/omega'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/omega.jpg'
                          alt='Omega Category'
                          title='Omega'
                        />
                      </div>
                    </Link>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-4'>
                    <Link to='/categories/tag-heuer'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/tag-heuer.jpg'
                          alt='Tag Heuer Category'
                          title='Tag Heuer'
                        />
                      </div>
                    </Link>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-6 col-6 mb-3'>
                    <Link to='/categories/longines'>
                      <div className='catImg'>
                        <img
                          src='/images/categories/longines.jpg'
                          alt='Longines Category'
                          title='Longines'
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section> */}
          </div>
        </section>
        <Footer />
      </>
    );
}

export default SearchScreen