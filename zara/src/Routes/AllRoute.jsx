import React from 'react'
import {Route,Routes} from "react-router-dom"
import ProductDisplay from '../Components/ProductDisplay'
import WomenProduct from '../Components/WomenProduct'
import Cart from './Cart'
import Help from './Help'
import Home from './Home'
import Login from './Login'
import Registration from './Registration'
import Searchbar from './searchbar'

const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Searchbar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/help' element={<Help />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/registration' element={<Registration />} />
        <Route path="/women" element={<WomenProduct />}></Route>
        <Route path="/women/:id" element={<ProductDisplay />} />
    </Routes>
    
    </>
  )
}

export default AllRoute