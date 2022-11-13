import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Carouselll from "../Components/Carousel";
// import {Route,Routes} from "react-router-dom"
// import Kids from "../Components/Kids";
// import Men from "../Components/Men";
// import Women from "../Components/Women";
// import AllRoute from './AllRoute'


const styles={
    display: "flex",
    columns: 3,
}


const Home = () => {
  // const [cateogry, setCategory] = useState(0);

  // const handleCategory = (val) => {
  //   setCategory(cateogry + val);
  // };

  return (
    <>
      {/* <div>Home</div> */}
      <div style={styles}>
        <div>
          <Carouselll />
        </div>

      </div>
    </>
  );
};

export default Home;
