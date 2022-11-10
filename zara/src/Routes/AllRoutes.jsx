import React from 'react'
import {Route,Routes} from "react-router-dom"

import Home from './Home'

// import Women from '../Components/Women'
// import Men from '../Components/Men'
// import Kids from '../Components/Kids'

const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
      
    </Routes>
    
    </>
  )
}

export default AllRoute