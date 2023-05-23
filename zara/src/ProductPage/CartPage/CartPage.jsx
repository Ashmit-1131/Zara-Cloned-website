import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL1 } from '../../constants/config';
import { RUPEES_SYMBOL } from '../../constants/constants';
import './CartPage.css';

const CartPage = ({
  imageURL,
  _id,
  productName,
  strikedPrice,
  price,
  itemCategory,
  itemGender,
  quantity,
  refresh, // Add refresh prop
}) => {
  const [qty, setQty] = useState(quantity);
  const { token } = useSelector((state) => state.authReducer);
  const toast = useToast();

  useEffect(() => {
    setQty(quantity); // Update qty when quantity prop changes
  }, [quantity]);

  const handleQuantity = async (e) => {
    try {
      const res = await axios.patch(
        BASE_URL1 + `/cart/${_id}`,
        { quantity: (e.target.value) },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (res.data.status === 1) {
        setQty(Number(e.target.value));
        toast({
          title: 'Success',
          description: 'Quantity updated successfully.',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        window.location.reload()
      } else {
        toast({
          title: 'Error',
          description: res.data.message,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while updating the quantity.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(BASE_URL1 + `/cart/${_id}`, {
        headers: {
          Authorization: token,
        },
      });

      if (res.data.status === 1) {
        toast({
          title: 'Success',
          description: 'Item deleted successfully.',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        window.location.reload()
        // Call the refresh function to trigger UI update
      } else {
        toast({
          title: 'Error',
          description: res.data.message,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while deleting the item.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      // window.location.reload()
    }
  };

  return (
    <div className="cart-item">
      <div className="cartitem-image">
        <img src={imageURL} alt="" />
      </div>
      <Link to={`/cart/${_id}`} className="cartitem-name"> {/* Assuming the route is "/cloths/:id" */}
        <p>{productName}</p>
      </Link>
      <p className="cartitem-price">{RUPEES_SYMBOL+" " +price}</p>
      <select
        value={qty || 1}
        className="cartitem-select"
        onChange={handleQuantity}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <button onClick={handleDelete} className="cartitem-deletebtn">
        <AiFillDelete />
      </button>
    </div>
  );
};

export default CartPage;
