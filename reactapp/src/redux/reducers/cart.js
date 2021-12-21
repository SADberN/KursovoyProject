import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCart } from '../actions/cart';

const initialState = {
  items: [],
};
const cart = (state = initialState, action) => {
  if (action.type === 'SET_CART') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};
const onRemove = (state, action) => {
  let basket = [];
  if (action.type === 'REMOVE_CART_ITEM') {
    axios.post('http://localhost:5000/api/basketitem/deleteitem?id');
    axios.get('http://localhost:5000/api/basketitem/').then(({ data }) => {
      basket = data;
      console.log('help');
    });

    return {
      ...state,
      items: basket,
    };
  }
  return state;
};

export default cart;
