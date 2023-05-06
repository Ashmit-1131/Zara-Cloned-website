import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Link,useNavigate} from "react-router-dom";
const MenDataComponent = () => {
  const [menData, setMenData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://puce-graceful-cougar.cyclic.app/men');
        const data = await response.json();
        
        // Generate unique ID for each object
      

        setMenData(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const Navigate = useNavigate()

  let handelRoue = (id) => {
    return Navigate(`${id}`)
  }

  return (
    <div>
      <h1>Men Data</h1>
     
      {menData.map((item) => (
        <div key={item.id} onClick={()=>handelRoue(item.id)}>
         
          <img src={item.imageURL} alt={item.productName} />
          <h2>{item.productName}</h2>
          <p>Price: {item.price}</p>
          <p>Striked Price: {item.strikedPrice}</p>
          <p>Gender: {item.itemGender}</p>
          <p>Category: {item.itemCategory}</p>
          <p>Sale: {item.sale}%</p>
        </div>
      ))}
    </div>
  );
};

export default MenDataComponent;
