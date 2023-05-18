import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Products from './Pages/Product'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Aboutpage from './Pages/AboutPage'
import SingleProduct from './Pages/SingleProduct'
import CartPage from './Pages/CartPage'
import Profile from './Pages/Profile';
import Shipping from './Pages/Shipping';
import Payment from './Pages/Payment';
import PlaceOrder from './Pages/PlaceOrder';
import Order from './Pages/Order'
import UserlistPage from './Pages/UserlistPage';
import AdminUserEdit from './Pages/AdminUserEdit';
import AdminProductList from './Pages/AdminProductList';
import AdminCreateProduct from './Pages/CreateProduct'
import ProductEditpage from './Pages/ProductEditpage';
import OrderListPage from './Pages/OrderListPage'
import UserOders from './Pages/UserOders'
import Resetpage from './Pages/Resetpage';
import SearchPage from './Pages/SearchPage'
import { ToastContainer } from 'react-toastify'




const App = () => {
  return (
    <>  
     <Router>

<Routes>
    <Route path='/' element={<Home/>} exact/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Products' element={<Products/>} exact/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Reset' element={<Resetpage/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
    <Route path='/Aboutpage' element={<Aboutpage/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/shipping' element={<Shipping/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/Login/Reset' element={<Resetpage/>}/>
    <Route path='/admin/userlist' element={<UserlistPage/>}/>
    <Route path='/admin/productlist' element={<AdminProductList/>}/>
    <Route path='/admin/product/create' element={<AdminCreateProduct/>}/>
    <Route path='/admin/user/:id/edit' element={<AdminUserEdit/>}/>
    <Route path='/admin/product/:id/edit' element={<ProductEditpage/>}/>
    <Route path='/placeOrder' element={<PlaceOrder/>}/>
    <Route path='/user/OrderList' element={<UserOders/>}/>
    <Route path='/admin/orderlist' element={<OrderListPage/>}/>
    <Route path='/order/:id' element={<Order/>}/>
    <Route path='/Cart/:id?' element={<CartPage/>}/>
    <Route path='/product/:id' element={<SingleProduct/>}/>
   	<Route exact path="/search" element={<SearchPage/>} />
		<Route path="/search/:keyword" element={<SearchPage/>}	exact/>
 


</Routes>

</Router>
<ToastContainer />
  </>
  )
}

export default App