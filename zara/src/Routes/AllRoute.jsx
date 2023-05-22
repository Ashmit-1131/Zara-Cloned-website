import React from 'react'
import {Route,Routes} from "react-router-dom"
import ProductDisplay from '../Components/ProductDisplay'
import WomenProduct from '../Components/WomenProduct'
import Cart from './Cart'
import Help from './Help'
import Home from './Home'
import UserLoginComponent from './Login'
import Registration from './Registration'
import Searchbar from './searchbar'
import Navbar from '../Components/Navbar'
import SearchPage from '../ProductPage/SearchPage'
import Profile from '../Datas/profile'
import ProductPage from '../ProductPage/Products'
import ProductPage1 from '../ProductPage/Products1'
import SingleProduct from '../ProductPage/Singleproduct'
import PrivateRoute from './PrivateRoutes'
import Cartscreen from '../ProductPage/CartPage/Cartscreen'
import OTP from '../ProductPage/Checkout/Otp'
const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Searchbar />} />
        <Route path='/login' element={<UserLoginComponent />} />
        <Route path='/help' element={<Help />} />
     
        <Route path='/registration' element={<Registration />} />
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/products1" element={<ProductPage1 />}></Route>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<PrivateRoute><Cartscreen/></PrivateRoute>}></Route>
        <Route path="/otp" element={<PrivateRoute><OTP/></PrivateRoute>}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/searchpage" element={<SearchPage />}></Route>
    </Routes>
    
    </>
  )
}

export default AllRoute