import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import authReducer from './auth.redux/authReducer';

import cartReducer from './cart.redux/cartReducer';



const rootReducer = combineReducers({

   cartManager:cartReducer,
   auth: authReducer
 
});

const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))