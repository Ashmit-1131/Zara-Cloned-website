import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import {reducer as authReducer}  from './auth.redux/authReducer';
import cartReducer from './cart.redux/cartReducer';




const rootReducer = combineReducers({

   authReducer,
   cartReducer
 
});



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))