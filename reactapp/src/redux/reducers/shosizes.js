const initialState = {
  items: [],
  isLoaded: false,
};
const shosizes = (state = initialState, action) => {
  if (action.type === 'SET_SHOSIZES') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default shosizes;
