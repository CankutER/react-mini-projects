import React from "react";
import { useGlobalContext } from "./context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { state, updateList } = useGlobalContext();
  console.log(state);
  return (
    <section className="cart">
      <header>
        {" "}
        <h2>your cart</h2>
      </header>
      <div>
        {state.cartList.length > 0 ? (
          state.cartList.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                state={state}
                updateList={updateList}
              />
            );
          })
        ) : (
          <h4 className="empty-cart">is currently empty</h4>
        )}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total{" "}
            <span>{`$${state.cartList.reduce((acc, curr) => {
              acc += curr.price * curr.amount;

              return Math.floor(acc * 100) / 100;
            }, 0)}`}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            updateList([]);
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
