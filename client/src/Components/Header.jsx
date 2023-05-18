import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { HiBarsArrowDown } from "react-icons/hi2";
import { HiBarsArrowUp } from "react-icons/hi2";
import { useState } from "react";
import logo from '../Images/logo.png';
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import SearchBox from "./Searchbox";

const Header = () => {
  const [isOPen, setIsopen] = useState(false);

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  console.log(cartItems)



  return (
    <>
    <nav className="md:pt-3   z-50 w-full bg-clr" >
      <p className=" flex justify-center md:justify-end text-white font-semibold items-center md:py-2 pb-3 md:pb-1 cursor-pointer px-5"><span><BsTelephone className="text-1xl"/> </span>  <span className="text-lg">Free Support: 0123456789</span></p>

{/* NAv toggler part */}
    <div className="flex md:hidden py-8  justify-between px-4 items-center  bg-white ">
        <h1 className="text-2xl font-extrabold tracking-widest text-cursive text-clr">
        <Link className="pointer " to={'/'}>  <img src={logo} alt="" className="w-20 pointer" /></Link>
          {/* ElvShop */}
          </h1>
          <li className="relative list-none">
            <Link to='/search'>


              <input
                type="text"
                name=""
                disabled
                id=""
                placeholder="item.."
                className=" pl-10 rounded-md text-black trans pr-2 w-10 hover:w-40 hover:w-37 outline-clr py-2"
              />
       <Link to={'/search'}> <BsSearch className="absolute text-2xl group-hover:w-40  top-3 left-2 text-clr" /></Link>
            </Link>
            </li>

        <ul className="flex justify-between gap-20 ml-1 overflow-x-hidden items-center">
        <li className=" hover:text-yellow-500 relative  hover:font-semibold trans ">
        <Link to={'/Cart/:id?'}>
                <BsCart4 className="text-3xl text-clr" />
                {
                   cartItems.map(item => (
                  <p className="absolute -top-1 -right-3 bg-black text-white  rounded-full w-5 h-5 text-center  text-base">{cartItems.reduce((a,item)=> a + item.qty, 0)}</p>
                  ))}
          </Link>
              </li>

                    
        {
          userInfo ? <>
          <li className=" md:pr-2.5 lg:pr-10 hover:text-clr parent  hover:font-semibold trans text-black font-semibold group">
              <Link to="" id='username'><i class="fa fa-user fa-2x text-clr" aria-hidden="true"></i> ▾</Link>

              <ul className="absolute -z-50 group-hover:z-10  bg-gray-100 px-1 py-3 ">
                <li><Link to='/profile'> <i class="fa fa-user-circle" aria-hidden="true"></i> Profile</Link></li>
                <li><Link to='/user/OrderList'> <i class="fa fa-shopping-bag" aria-hidden="true"></i> Orders</Link></li>
                <li><button onClick={logoutHandler}> <i class="fa fa-sign-out" aria-hidden="true"></i> Logout</button></li>
              </ul>

            </li>
           
              </>
         : <>
        
         </>
        }

                  {
          userInfo && userInfo.isAdmin && <>
          <li className=" md:pr-2.5 lg:pr-10 hover:text-clr parent  hover:font-semibold trans text-black font-semibold group">
          <Link  id='username'><i class="fa fa-user fa-2x text-clr" aria-hidden="true"></i>▾</Link>

              <ul className="absolute -z-50 group-hover:z-10  bg-gray-100 px-3 py-3 ">
              <li><Link to='/profile'> <i class="fa fa-user-circle" aria-hidden="true"></i> Profile</Link></li>
                <li><Link to='/admin/userlist'> <i class="fa fa-users" aria-hidden="true"></i> Users</Link></li>
                <li><Link to='/admin/productlist'> <i class="fa fa-product-hunt" aria-hidden="true"></i> Products</Link></li>
                <li><Link to='/admin/orderlist'> <i class="fa fa-file-archive-o" aria-hidden="true"></i> Orders</Link></li>
                <li><button onClick={logoutHandler}> <i class="fa fa-sign-out" aria-hidden="true"></i> Logout</button></li>
               
              </ul>

            </li>

            
        </>
        }
           
           <li> <HiBarsArrowDown className="text-4xl text-white cursor-pointer bg-clr3 bg-clr hover:bg-clr trans1  border border-white hover:text-white p-1 rounded-md hover:text-4xl " onClick={() => setIsopen(!isOPen)}/></li>
        </ul>

    </div>

{/* Sidebar for mobile screens */}

<div className={isOPen? "md:hidden bg-white h-screen w-2/3 p-5 fixed z-50 -top-0 transition-all left-0 trans1 shadow-2xl shadow-black" : "md:hidden bg-white h-screen w-2/3 p-5 fixed z-50 -top-0  -left-96 tab:-left-full  transition-all shadow-2xl shadow-black trans1"}>
<HiBarsArrowUp className="ml-auto text-3xl hover:bg-clr3 trans1  border border-clr hover:text-clr2 p-1 rounded-full cursor-pointer mb-3 hover:text-4xl text-clr"  onClick={() => setIsopen(!isOPen)}/>
<hr className="" />

<p className=" flex justify-center md:justify-end black-yellow-500 font-bold items-center md:py-2 pb-3 mt-4 md:pb-1 cursor-pointer"><span><BsTelephone className="text-xl mr-2"/> </span>  <span className="text-md">Free Support: 0123456789</span></p>

<ul className="mb-5">
  <li className="my-2 hover:text-clr hover:font-semibold font-normal trans"><Link to="/">Home</Link></li>
  <hr className="" />
  <li className="my-2 hover:text-clr hover:font-semibold font-normal trans"><Link to="/Products">Shop</Link></li>
  <hr className="" />
  <li className="my-2 hover:text-clr hover:font-semibold font-normal trans"><Link to="/Contact">Contact-Us</Link></li>
  <hr className="" />
  <li className="my-2 hover:text-clr hover:font-semibold font-normal trans"><Link to="/Aboutpage">About-Us</Link></li>
{ userInfo ? (<li><button onClick={logoutHandler}> <i class="fa fa-sign-out" aria-hidden="true"></i> Logout</button></li>) :  <>

<hr className="" />
  <li className="my-2 hover:text-clr hover:font-semibold font-normal trans"><Link to="/Login">Sign-In</Link></li>
  <hr className="" />
  <li className="my-2 hover:text-clr hover:font-semibold font-normal trans"><Link to="/Signup">Sign-Up</Link></li>
  <hr className="" />
</>
}
</ul>

<p className="text-black text-center font-bold">📧elvis@elvshop.com</p>



</div>



{/* Desktop Nav */}
      <div className="md:flex text-zinc-600 justify-between hidden md:visible lg:px-36 md:px-8 py-8 border-y-[0.3px] border-gray-700 md:items-center bg-white">
        <li className="relative list-none">
         
          <Link to='/search'> <SearchBox /></Link>
          {/* <input
            type="text"
            name=""
            id=""
            placeholder="item....."
            className=" pl-10 rounded-md text-black trans pr-2 w-100 outline-clr3 py-2 group border-[1px] border-gray-700"
          />
          <BsSearch className="absolute  top-0 left-0 text-white bg-clr h-full w-8 p-1  rounded-l-md group-hover:bg-gray-700 trans" /> */}
        </li>

        <h1 className="text-4xl font-extrabold tracking-widest text-cursive text-cursive text-black">
          <Link className="pointer" to={'/'}>
          <img src={logo} alt="" className="md:w-24" />
          </Link>
        {/* ElvShop */}
        </h1>


        <ul className="md:flex gap-8 text-lg items-center">
       
        {
          userInfo ? <>
          <li className="border-r border-r-clr md:pr-2.5 lg:pr-10 hover:text-clr hover:border-r-clr hover:font-semibold trans text-black font-semibold group">
              <Link to="/Signup" id='username'>{userInfo.name}▾</Link>

              <ul className="absolute -z-10 group-hover:z-10 bg-gray-100 px-8 py-3">
                <li><Link to='/profile'> <i class="fa fa-user-circle" aria-hidden="true"></i> Profile</Link></li>
                <li><Link to='/user/OrderList'> <i class="fa fa-shopping-bag" aria-hidden="true"></i> Orders</Link></li>
                <li><button onClick={logoutHandler}> <i class="fa fa-sign-out" aria-hidden="true"></i> Logout</button></li>
              </ul>

            </li>
            <li className="border-r border-r-clr md:pr-2.5 lg:pr-10 hover:text-clr2 hover:border-r-clr hover:font-semibold trans text-black font-semibold relative">
                <Link to={'/Cart/:id?'}>
                  <BsCart4 className="" />

                  {
                   cartItems.map(item => (
                  <p className="absolute -top-4 right-6 bg-clr text-white  rounded-full w-6 h-6 text-center  text-base">{cartItems.reduce((a,item)=> a + item.qty, 0)}</p>
                  ))}
                  </Link>
              </li></>
         : <>
            <li className="border-r border-r-clr md:pr-2.5 lg:pr-10 hover:text-black hover:border-r-clr hover:font-semibold trans text-black font-semibold">
            <Link to="/Login">Sign In</Link>
          </li>
          <li className="border-r border-r-clr md:pr-2.5 lg:pr-10 hover:text-black hover:border-r-clr hover:font-semibold trans text-black font-semibold">
            <Link to="/Signup">Sign Up</Link>
          </li>
         </>
        }

        {
          userInfo && userInfo.isAdmin && <>
          <li className="border-r border-r-clr md:pr-2.5 lg:pr-10 hover:text-clr hover:border-r-clr hover:font-semibold trans text-black font-semibold group">
              <Link to="/Signup" id='adminmenu'>Admin▾</Link>

              <ul className="absolute -z-10 group-hover:z-10  bg-gray-100 px-8 py-3">
                <li><Link to='/admin/userlist'> <i class="fa fa-users" aria-hidden="true"></i> Users</Link></li>
                <li><Link to='/admin/productlist'> <i class="fa fa-product-hunt" aria-hidden="true"></i> Products</Link></li>
                <li><Link to='/admin/orderlist'> <i class="fa fa-file-archive-o" aria-hidden="true"></i> Orders</Link></li>
               
              </ul>

            </li>
        </>
        }
          
        </ul>
      </div>

<div className="border-b-[0.3px]  border-gray-500 bg-clr2">
        <ul className="md:flex hidden md:w-1/4 mx-auto justify-between py-5 ">
          <li className="text-lg text-zinc-900 hover:text-clr4 trans1 font-bold hover:font-bold hover:text-1xl"><Link to="/">Home</Link></li>
          <li className="text-lg text-zinc-900 hover:text-clr4 trans1 font-bold hover:font-bold hover:text-1xl"><Link to="/Products">Shop</Link></li>
          <li className="text-lg text-zinc-900 hover:text-clr4 trans1 font-bold hover:font-bold hover:text-1xl"><Link to="/Aboutpage">About Us</Link></li>
          <li className="text-lg text-zinc-900 hover:text-clr4 trans1 font-bold hover:font-bold hover:text-1xl"><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div> 

    </nav>
  </>
  );
};

export default Header;
