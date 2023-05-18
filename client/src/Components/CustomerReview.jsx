import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import team1 from '../team/team-1.jpg'

const CustomerReview = () => {
  return (
    <Carousel showArrows={true} autoPlay={true} autoFocus={true} infiniteLoop={true} interval={5000} showStatus={false} showIndicators={false} emulateTouch={true} preventMovementUntilSwipeScrollTolerance={true} thumbWidth={0}  className=" p-10 review">

      <div className='md:w-4/5 text-center mx-auto'>
        <h1 className='md:text-4xl text-xl text-clr mb-2'>CUSTOMER REVIEWS</h1>
        <p className='text-lg'>What Says Our Customers About Us!</p>

          <div className='py-8'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id pariatur odit iusto iure alias, veniam facilis in rem, totam nemo ducimus possimus delectus illum fuga nam et laboriosam corporis architecto eum? Temporibus illo quas amet adipisci, saepe eveniet aliquam fugit iusto voluptatum facere enim numquam, ratione quis nostrum nemo.</p>

            <div className=' w-1/12 bg-clr h-[2px] mx-auto mt-8'></div>
            <h2 className='text-clr text-xl font-bold'>Mack Hills</h2>
            <p>South LA</p>
            
          </div>
      </div>

      <div className='md:w-4/5 text-center mx-auto'>
        <h1 className='md:text-4xl text-xl text-clr mb-2'>CUSTOMER REVIEWS</h1>
        <p className='text-lg'>What Says Our Customers About Us!</p>

          <div className='py-8'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id pariatur odit iusto iure alias, veniam facilis in rem, totam nemo ducimus possimus delectus illum fuga nam et laboriosam corporis architecto eum? Temporibus illo quas amet adipisci, saepe eveniet aliquam fugit iusto voluptatum facere enim numquam, ratione quis nostrum nemo.</p>

            <div className=' w-1/12 bg-clr h-[2px] mx-auto mt-8'></div>
            <h2 className='text-clr text-xl font-bold'>Alice James</h2>
            <p>Assia</p>
            
          </div>
      </div>
 

</Carousel>
  )
}

export default CustomerReview