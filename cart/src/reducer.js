const reducer = (state, action) => {
  if (action.type === "UPDATE_LIST") {
    return { ...state, cartList: action.payload };
  }
  if (action.type === "FETCH") {
    return { ...state, cartList: action.payload, isLoading: false };
  }
};
export default reducer;
