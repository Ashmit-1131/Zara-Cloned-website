import {GET_CART_ERROR,GET_CART_LOADING,GET_CART_SUCESS,GET_CART_UPDATE,ADD_CART,DELETE_CART,GET_CART_NUM} from './cartTypes.js';
import {GetCartItem,AddToCart,DeleteCart,cartUpdate} from './cartApi.js';


//GetCart_________________________________
export const GetCartData = async(dispatch) => {
     dispatch ({type:GET_CART_LOADING})

     try{
      let cart = await GetCartItem()
      let total = 0;
       for(let i=0; i<cart.length; i++){
         total+=(cart[i].price*cart[i].quantity);
       }
        
        dispatch ({type:GET_CART_SUCESS,payload:{cart,total,cartTotal:cart.length}})
     }
     catch(err){
        dispatch({type:GET_CART_ERROR,payload:err.message})
     }
}

export const GetCartNum = (dispatch) => {
   dispatch({type:GET_CART_NUM})
}


//AddtoCart______________________________
export const AddtoCart =(item)=>async (dispatch) => {
  // console.log(item)
  try{
   let {data} = await AddToCart (item)
      data.sug && alert(data.sug)
     
    if(data.msg){
      dispatch({type:ADD_CART,payload:item,msg:data.msg || data.sug})
      return data.msg || data.sug
    }
  }catch(err){
     dispatch({type:GET_CART_ERROR,payload:err.message})
  }

}


//DeleteCart_________________________________
export const DeletefromCart =(id)=>async(dispatch) => {
      try{
         await DeleteCart(id)
         dispatch({type:DELETE_CART,payload:id})
      }catch(err){
         dispatch({type:GET_CART_ERROR,payload:err.message})
      }
}


//updateCart________________________
export const upgradeQuantity =(id,key,quantity) =>async(dispatch) => {
 
   let value = quantity+key;
   try{
      let data = await cartUpdate(id,value)
      
      dispatch({type:GET_CART_UPDATE,payload:{_id:data,value}})
   }catch(err){
      dispatch({type:GET_CART_ERROR,payload:err.message})
   }
}