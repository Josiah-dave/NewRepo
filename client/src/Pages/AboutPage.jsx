import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Page from '../Components/Page'
import aboutimg from '../Shopping/about-1.png';


const AboutPage = () => {
  return (
    <>
    <Header/>
    <Page tag="About us"/>

            <div className='md:px-20 md:py-10 md:flex py-10'>
                <div className='md:w-1/2 mx-auto px-10'>
                    <h1 className='uppercase text-4xl pb-5 font-thin font-mono text-clr'>OUR story</h1>
                    <p className='text-justify text-thin text-gray-800 text-md   leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perferendis quasi, cum voluptate perspiciatis sunt non ipsum quisquam, quod neque sequi voluptatem animi explicabo sint libero dignissimos. Aliquid ipsa consequatur doloribus eum placeat. Et aperiam quibusdam recusandae maiores enim odio temporibus dignissimos, quam saepe ullam laudantium! Ratione ipsum veritatis ut eaque. Tenetur, maxime suscipit blanditiis voluptatum atque dolorum ratione eligendi, totam praesentium qui nisi, vero rem! Sit rem consequatur asperiores delectus facere obcaecati dolor ut veniam. Nihil corporis provident repellat cupiditate ipsam sequi sint laboriosam illo aperiam quis molestiae quam officiis alias iure reprehenderit, dolorem voluptates soluta autem maxime deleniti.</p>
                </div>
                <div className='md:w-1/2 mx-auto py-10 px-10 md:px-0 '>
                    <img src={aboutimg} alt="" className='w-full rounded-xl' />
                </div>
                
            </div>

    <Footer/>
    </>
  )
}

export default AboutPage