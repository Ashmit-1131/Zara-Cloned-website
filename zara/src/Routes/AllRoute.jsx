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
const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<><Navbar/><Home /></>} />
        <Route path='/search' element={<Searchbar />} />
        <Route path='/login' element={<><Navbar/><UserLoginComponent /></>} />
        <Route path='/help' element={<Help />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/registration' element={<><Navbar/><Registration /></>} />
        <Route path="/women" element={<WomenProduct />}></Route>
        <Route path="/women/:id" element={<ProductDisplay />} />
    </Routes>
    
    </>
  )
}

export default AllRoute