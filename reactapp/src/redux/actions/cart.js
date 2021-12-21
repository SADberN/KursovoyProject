export const setCart = (items) => ({
  type: 'SET_CART',
  payload: items,
});
export const clearCart = (items) => ({
  type: 'CLEAR_CART',
  payload: items,
});
export const onRemove = (items) => ({
  type: 'REMOVE_CART_ITEM',
  payload: items.id,
});
export const minusCartItem = (items) => ({
  type: 'MINUS_CART_ITEM',
  payload: items,
});
export const plusCartItem = (items) => ({
  type: 'PLUS_CART_ITEM',
  payload: items,
});
