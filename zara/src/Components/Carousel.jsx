


import React from 'react'
// import  { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Women from './Women';
import Men from './Men';
import Kids from './Kids';
import { Link } from 'react-router-dom';
const Carouselll = () => {
  return (
   <>
       <Carousel 
       showThumbs={false}
       autoPlay={true}
       transitionTime={1000}
       showStatus={false}
       infiniteLoop={true}
    >

                <div><Link to={"/products?itemGender=female"}><Women/></Link></div>
                <div><Link to={"/products?itemGender=male"}><Men/></Link></div>
                <div><Link to={"/products?itemGender=girls"}><Kids/></Link></div>


            </Carousel>
   
   </>
  )
}

export default Carouselll