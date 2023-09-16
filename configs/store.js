import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import dataReducer from '../reducers/productReducer';
import cartReducer from '../reducers/cartReducer';

const rootReducer = combineReducers({
    dataReducer,
    cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
