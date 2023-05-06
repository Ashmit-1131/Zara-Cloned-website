
import {GET_CART_ERROR,GET_CART_LOADING,GET_CART_SUCESS,GET_CART_UPDATE,ADD_CART,DELETE_CART, GET_CART_NUM} from './cartTypes.js';


let initialvalue = {
    cart:[],
    loading:false,
    error:false,
    total:0,
    msg:''
}

export const CartReducer = (state=initialvalue,{type,payload}) => {
 
        switch(type){
            case GET_CART_SUCESS :{
              
                return{
                    ...state,
                    error:false,
                    loading:false,
                    cart:payload.cart,
                    total:payload.total
                }
            }
            case GET_CART_ERROR :{
                return {
                    ...state,
                    error:payload,
                    cart:[],
                    loading:false
                }

            }
            case GET_CART_LOADING :{
                return{
                    ...state,
                    error:'',
                    loading:true,
                    cart:[]
                }
            }
            case ADD_CART :{
                
                return{
                    ...state,
                    error:false,
                    loading:false,
                    cart:[...state.cart,payload],
                    msg:payload.msg
                }
            }
            case DELETE_CART :{
                let newcart = state.cart.filter((ele)=>ele._id !== payload)
                let Total = 0;
                for(let i=0; i<newcart.length; i++){
                   Total+=(newcart[i].price*newcart[i].quantity)
                }
                return{
                    ...state,
                    error:false,
                    loading:false,
                    cart:newcart,
                    total:Total
                }
            }
            case GET_CART_NUM :{
                return(
                    state
                )
            }
            case GET_CART_UPDATE :{
                let newcart = state.cart.map((ele)=>{
                    if(ele._id===payload._id){
                        return{
                            ...ele,
                            quantity:payload.value
                        }
                    }else{
                        return{
                            ...ele
                        }
                    }
                })
                let Total = 0;
                for(let i=0; i<newcart.length; i++){
                   Total+=(newcart[i].price*newcart[i].quantity)
                }

                return {
                    ...state,
                    error:false,
                    loading:false,
                    cart:newcart,
                    total:Total
                }

            }
            default:{
                return state;
            }
        }
}