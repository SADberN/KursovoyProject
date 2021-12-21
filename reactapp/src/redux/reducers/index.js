import { combineReducers } from 'redux';
import filtersReducer from './filters';
import productsReducer from './product';
import colorsReducer from './colors';
import sizesReducer from './sizes';
import shosizesReducer from './shosizes';
import cartReducer from './cart';

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer,
  colors: colorsReducer,
  sizes: sizesReducer,
  shosizes: shosizesReducer,
  cart: cartReducer,
});
export default rootReducer;
