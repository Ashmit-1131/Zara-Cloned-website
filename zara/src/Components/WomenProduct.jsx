import React, { useEffect, useState } from 'react'
import WomenCard from './WomenCard'



const getData=()=>{

return fetch("https://amit-fake-stoore-test.herokuapp.com/women").then((res)=>res.json())


}


const WomenProduct = () => {

    const [data,setData]=useState ([])


    useEffect(()=>{
    
    getData().then((res)=>setData(res));
    
    
    
    },[])
    



  return (
    <>

    {data.map((item)=><WomenCard key={item.id} item={item} />)}
    
    
    </>
  )
}

export default WomenProduct