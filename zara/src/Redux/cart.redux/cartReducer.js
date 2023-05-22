import { CART_UPDATE } from "./cartTypes"

const initialState={
    cartStatus:false
}

export default function cartReducer(state=initialState,{type,payload}){

    switch(type){
        case CART_UPDATE:{
            return {...state,cartStatus:!state.cartStatus}
        }
        

        default:{
            return state
        }
    }

}