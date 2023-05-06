import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import authReducer from './auth.redux/authReducer';

import {CartReducer} from './cart.redux/cartReducer';



const rootReducer = combineReducers({

   cartManager:CartReducer,
   auth: authReducer
 
});

const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))