import React from "react";
const CartItem = ({ item, updateList, state }) => {
  return (
    <article className="cart-item">
      <img src={item.img} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <h4 className="item-price">{`$${item.price}`}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            updateList(
              state.cartList.filter((cartItem) => cartItem.id !== item.id)
            );
          }}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase btn*/}
        <button
          className="amount-btn"
          onClick={() => {
            updateList(
              state.cartList.map((cartItem) => {
                if (cartItem.id === item.id) {
                  cartItem.amount++;
                  return cartItem;
                }
                return cartItem;
              })
            );
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <p className="amount">{item.amount}</p>
        {/* decrease btn */}
        <button
          className="amount-btn"
          onClick={() => {
            if (item.amount === 1) {
              updateList(
                state.cartList.filter((cartItem) => cartItem.id !== item.id)
              );
            } else {
              updateList(
                state.cartList.map((cartItem) => {
                  if (cartItem.id === item.id) {
                    cartItem.amount--;
                    return cartItem;
                  }
                  return cartItem;
                })
              );
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
