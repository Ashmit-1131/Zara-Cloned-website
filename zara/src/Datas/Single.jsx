import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SingleProductPage = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(``);
        const data = await response.json();

        // Generate unique ID for the product
        const updatedProduct = {
          ...data,
          id: uuidv4(),
        };

        setProduct(updatedProduct);
      } catch (error) {
        console.log('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <img src={product.imageURL} alt={product.productName} />
          <h1>{product.productName}</h1>
          <p>Price: {product.price}</p>
          <p>Striked Price: {product.strikedPrice}</p>
          <p>Gender: {product.itemGender}</p>
          <p>Category: {product.itemCategory}</p>
          <p>Sale: {product.sale}%</p>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProductPage;
