import React from "react";
import exit from "../assets/exit.svg";
import cart from "../assets/cart.svg";
import user from "../assets/user.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { total_items, clearCart } = useCartContext();
  const { closeSidebar } = useProductsContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          Cart <img src={cart} alt="Cart" />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout <img src={exit} alt="login" />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          Login <img src={user} alt="login" />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 15px;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
  }
  .cart-value {
    position: absolute;
    top: 20px;
    right: -10px;
    background: var(--clr-primary-5);
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.6rem;
    color: var(--clr-white);
    padding: 10px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 15px;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
  }
`;
export default CartButtons;
