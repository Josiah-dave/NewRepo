import React from "react";
import ChatBot from "../Components/Chatbot";
import Footer from "../Components/Footer";
import FreeDelivery from "../Components/FreeDelivery";
import Header from "../Components/Header";
import HomeSec from '../Components/HomeSec'


const Home = () => {
  return (
    <>
     
      <Header />
      <HomeSec/>
      <FreeDelivery/>
      {/* <ChatBot/> */}
      <Footer/>
 
    </>
  );
};

export default Home;
