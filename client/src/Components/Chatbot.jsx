import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const Chatbot = () => {

    // all available theme props
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#044B61',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#044B61',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

// all available config props
const config ={
    width: "400px",
    height: "500px", 
    floating: true,
    
  };


  return (
   
     <ThemeProvider theme={theme}>
        <ChatBot   
          steps={[


              // {
              //   id:'name', 
              //   user:true,
              //   trigger:'q-lastname'
              // },
              {
                id:'q-lastname', 
                message:'What is your last name?', 
                trigger:'lastname',
              },
              // {
              //   id:'lastname', 
              //   user:true,
              //   trigger:'q-email'
              // },
              // {
              //   id:'q-email', 
              //   message:'Finally. what is you email?', 
              //   trigger:'email',
              // },
              // {
              //   id:'email', 
              //   user:true,
              //   trigger:'q-submit'
              // },


            // {
            //   id:'intro', 
            //   message:'Hi!, welcome to ElvShop. What would you like to know about', 
            //   trigger:'intro-user',
            // },
            // {
            //   id:'intro-user', 
            //   options:[
            //   {value:'y', label:'Products', trigger:'yes-products'},
            //   {value:'y', label:'Brands', trigger:'yes-brands'},
            //   {value:'y', label:'Our Location', trigger:'yes-location'},
            //   {value:'y', label:'Delivery system', trigger:'yes-delivery'},
            //   {value:'y', label:'Means of payment', trigger:'yes-payment'},
            //   {value:'n', label:'Nothing', trigger:'no-response'},
            //   ] 
            // },
            // {
            //   id:'yes-products', 
            //   message:'Great!', 
            //   end:true,
            // },
            // {
            //   id:'yes-brands', 
            //   message:'Great!', 
            //   end:true,
            // },
            // {
            //   id:'yes-location', 
            //   message:'Great!', 
            //   end:true,
            // },
            // {
            //   id:'yes-delivery', 
            //   message:'Great!', 
            //   end:true,
            // },
            // {
            //   id:'yes-payment', 
            //   message:'Great!', 
            //   end:true,
            // },
            // {
            //   id:'no-response', 
            //   message:'Sorry to hear that.', 
            //   end:true,
            // },
          
            // {
            //     id:'yes-products', 
            //     message:'We sell alls sorts of jewelries, ranging from men to female', 
            //     trigger:'products-select',
            //     // end:true,
            //   },


            //    {
            //   id:'products-select', 
            //   message:'Would you like to check them all out?', 
            //   trigger:'options',
            // },
            // {
            //   id:'options', 
            //   options:[
            //   {value:'y', label:'Yes', trigger:'product-map' },
            //   {value:'n', label:'No', trigger:'no-response'},
            //   ] 
            // },

            //   {
            //     id:'product-map', 
            //     message:`Check out shopping page`,
            //     trigger:''
            //   },
              
            //   {
            //     id:'name', 
            //     user:true,
            //     trigger:'q-lastname'
            //   },
            //   {
            //     id:'q-lastname', 
            //     message:'What is your last name?', 
            //     trigger:'lastname',
            //   },
            //   {
            //     id:'lastname', 
            //     user:true,
            //     trigger:'q-email'
            //   },
            //   {
            //     id:'q-email', 
            //     message:'Finally. what is you email?', 
            //     trigger:'email',
            //   },
            //   {
            //     id:'email', 
            //     user:true,
            //     trigger:'q-submit'
            //   },
            //   {
            //     id:'q-submit', 
            //     message:'Do you wish to submit?', 
            //     trigger:'submit'
            //   },
            //   {
            //     id:'submit', 
            //     options:[
            //     {value:'y', label:'Yes', trigger:'end-message'},
            //     {value:'n', label:'No', trigger:'no-submit'},
            //     ] 
            //   },
            //   {
            //           id: 'no-submit',
            //           message:'Your information was not submitted.', 
            //           end: true,
            //         },
            //         {
            //             id: 'end-message',
            //             message:'Your information was submitted.', 
            //           end: true,
            //        },
          ]}


          {...config}
          
          />
        </ThemeProvider>

       
    );

       
}

export default Chatbot;