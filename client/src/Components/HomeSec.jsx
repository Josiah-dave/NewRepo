import React from 'react';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Bounce, Slide, Zoom } from 'react-awesome-reveal';



import text from '../Shopping/text4.1.png';
import CustomerReview from './CustomerReview';
import category1 from '../Shopping/category-1.png';
import category2 from '../Shopping/category-2.png';
import category3 from '../Shopping/category-3.png';
import category4 from '../Shopping/category-4.png';
import category5 from '../Shopping/category-5.png';
import Collections from './Collections';






const Home = () => {
  return (
    <>
    {/* Slider */}
    {/* md:pt-64 tab:pt-40 mini:pt-28 xs:pt-32 */}
    <div className=' border-clr md:mb-8'>
         <Carousel showArrows={false} autoPlay={true} autoFocus={true} infiniteLoop={true} interval={5000} showStatus={false} showIndicators={false} emulateTouch={true} preventMovementUntilSwipeScrollTolerance={true}  className="">   
               <div className='home1 w-100  h-[25rem] md:h-[30rem] md:p-10 py-3'>
                    <div className='md:w-1/2 w-4/5  mr-auto py-8 px-4 text-left space-y-10'>
                      <h2 className='text-black font-thin md:text-7xl text-3xl opacity-100 break-all'>ELEGANT <br /> COLLECTIONS</h2>
                      <p className='mb-7'>THOUGHTFULLY DESIGNED LAB-GROWN DIAMOND RINGS FOR A BRIGHT FUTURE.</p>

                      <h1>
                      <Link to="/Products" className='bg-clr text-white md:text-2xl text-lg md:px-8 px-5 hover:px-3 rounded-sm py-2 trans1 break-all xs:text-sm '>Shop Now</Link>
                      </h1>

                    </div>

                </div>
              

             
                
             <div className='home2 w-100  h-[25rem] md:h-[30rem] md:p-10 py-5'>
             <div className='md:w-1/2 w-4/5  mr-auto py-8 px-4 text-left space-y-10'>
                      <h2 className='text-black font-thin md:text-7xl text-3xl opacity-100 break-all'>ELEGANT <br /> COLLECTIONS</h2>
                      <p className='mb-7'>THOUGHTFULLY DESIGNED LAB-GROWN DIAMOND RINGS FOR A BRIGHT FUTURE.</p>

                      <h1>
                      <Link to="/Products" className='bg-clr text-white md:text-2xl text-lg md:px-8 px-5 hover:px-3 rounded-sm py-2 trans1 break-all xs:text-sm '>Shop Now</Link>
                      </h1>

                    </div>
                </div>
            
{/* 
        
               <div className='home3 h-[25rem] md:h-[30rem]'>
                  
                 </div> */}
             


{/*  
                 <div className='home4 w-100  h-[25rem] md:h-[30rem] md:p-10 py-5'>
                   <div className='md:w-1/2 w-2/5 bg-black opacity-80  ml-auto py-8 px-4 text-left space-y-3'>
                      <h2 className='text-yellow-500 font-black md:text-7xl text-5xl opacity-100 break-all'>40% OFF</h2>
                      <h2 className='text-yellow-700 text-5xl font-thin break-all xs:text-4xl'>NECKLACE</h2>
                      <p>Find the bestfor your loved ones</p>

                      <Link to="" className='bg-yellow-600 text-white md:text-2xl text-lg md:px-6 px-3 py-2 hover:bg-yellow-800 trans1 break-all xs:text-sm'>Explore Now</Link>

                    </div>
                </div> */}
        
              
            </Carousel>


      {/*Product view  */}
      <div className='bg-white py-5'>
        <h2 className='text-center text-clr text-3xl md:text-6xl uppercase font-segoe mb-2'>You may love</h2>
        <p className='text-center text-gray-700 md:text-xl text-sm'>Check them all out!!</p>

        <div className='md:flex items-center justify-center gap-4 mt-5 space-y-5'>
              <div className='md:w-1/6 w-4/5 mx-auto  relative'>
                <img src={category1} alt="" className='w-full' />
                <Link to="/Products" className='bg-clr text-white px-9 py-3 rounded-sm hover:px-12 trans absolute md:top-52 top-60 right-16'>Shop Now  </Link>
              </div>
              <div className='md:w-1/6 w-4/5 mx-auto relative'>
                <img src={category2} alt="" className='w-full' />
                <Link to="/Products" className='bg-clr text-white px-9 py-3 rounded-sm hover:px-12 trans absolute md:top-52 top-60 right-16'>Shop Now  </Link>
              </div>
              <div className='md:w-1/6 w-4/5 mx-auto relative'>
                <img src={category3} alt="" className='w-full' />
                <Link to="/Products" className='bg-clr text-white px-9 py-3 rounded-sm hover:px-12 trans absolute md:top-52 top-60 right-16'>Shop Now  </Link>
              </div>
              <div className= 'md:w-1/6 w-4/5 mx-auto  relative'>
                <img src={category4} alt="" className='w-full' />
                <Link to="/Products" className='bg-clr text-white px-9 py-3 rounded-sm hover:px-12 trans absolute md:top-52 top-60 right-16'>Shop Now  </Link>
              </div>
              <div className='md:w-1/6 w-4/5 mx-auto  relative'>
                <img src={category5} alt="" className='w-full' />
                <Link to="/Products" className='bg-clr text-white px-9 py-3 rounded-sm hover:px-12 trans absolute md:top-52 top-60 right-16'>Shop Now  </Link>
              </div>
                
        </div>

      </div>

    </div>




{/* Banner Big */}

<div className='banner md:h-[25rem] h-[30rem] py-18 space-y-6 text-center px-5 group'>
  <img src={text} alt=""  className='w--1/4 mx-auto'/>
  <h1 className='text-black text-5xl font-bold text-center'>Hot Deal Sale! <span className=' group-hover:text-6xl trans1 text-clr font-medium '>20% OFF</span></h1>

  <p className='text-black text-xl text-center '>Lab Grown Diamonds Studs </p>

 <h6> <Link className='border px-10 py-4 mx-auto hover:bg-white hover:text-black trans1 hover:py-5 hover:px-12 hover:border-clr text-white bg-clr ' to="/Products"> Shopping Now</Link></h6>

</div>


{/* Gallery */}
<Collections/>

{/* Customer Review section, its a carousel from component folder */} 
<CustomerReview/>



    </>
  );
};

export default Home;