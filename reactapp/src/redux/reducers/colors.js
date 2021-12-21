const initialState = {
  items: [],
  isLoaded: false,
};
const colors = (state = initialState, action) => {
  if (action.type === 'SET_COLORS') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default colors;
