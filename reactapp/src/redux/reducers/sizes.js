const initialState = {
  items: [],
  isLoaded: false,
};
const sizes = (state = initialState, action) => {
  if (action.type === 'SET_SIZES') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default sizes;
