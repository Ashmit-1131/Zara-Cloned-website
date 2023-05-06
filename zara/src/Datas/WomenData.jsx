import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const WomenDataComponent = () => {
  const [menData, setMenData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://puce-graceful-cougar.cyclic.app/women');
        const data = await response.json();
        
        // Generate unique ID for each object
        const updatedData = data.map((item) => ({
          ...item,
          id: uuidv4(),
        }));

        setMenData(updatedData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Men Data</h1>
      {menData.map((item) => (
        <div key={item.id}>
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

export default WomenDataComponent;
