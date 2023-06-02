import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, setcart } from "../Redux/Reduxtoolkit";

const Cart = () => {
  var cartitems = useSelector((state) => {
    return state.cart;
  });
  var name = useSelector((s) => {
    return s.user.name;
  });
  const d = useDispatch();
  const n = useNavigate();
  const newcart = [];

  function increase(name) {
    console.log(name);
    cartitems.map((product) => {
      if (product.name == name) {
        //checking for stock
        if (product.rating == product.countInStock) {
          newcart.push(product);
          alert(`only ${product.countInStock} products are available in stock`);
        } else {
          product = { ...product, rating: product.rating + 1 };
          console.log(product);
          newcart.push(product);
        }
      } else {
        newcart.push(product);
      }
    });
    d(clearCart());
    newcart.map((product) => {
      d(setcart(product));
    });
  }

  function decrease(name) {
    console.log(name);
    cartitems.map((product) => {
      if (product.name == name) {
        //checking for delete product
        if (product.rating <= 1) {
        } else {
          product = { ...product, rating: product.rating - 1 };
          console.log(product);
          newcart.push(product);
        }
      } else {
        newcart.push(product);
      }
    });
    d(clearCart());
    newcart.map((product) => {
      d(setcart(product));
    });
  }

  function checkout() {
    if (name) {
      n("/shipping");
    } else n("/signin");
  }
  //console.log(s)
  return (
    <div>
      <h2>Cart</h2>
      <Link to="/">Back</Link>

      {cartitems.map((product) => (
        <div key={product.image}>
          <img src={product.image} alt={product.image}></img>
          <h4>{product.name}</h4>
          <h5>
            quantity: {product.rating}{" "}
            <button onClick={(e) => increase(product.name)}>+</button>
            <button onClick={(e) => decrease(product.name)}>-</button>
          </h5>
        </div>
      ))}
      <button disabled={cartitems.length == 0} onClick={(e) => checkout()}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
