import React from 'react'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Page from '../Components/Page'

const Product = () => {
  return (
    <>
      <Header />
      <Page tag= 'product page'/>
      <Collections/>

      <Footer/>
    </>
  )
}

export default Product