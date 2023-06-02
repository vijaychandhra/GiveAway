import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/Reduxtoolkit";

const Payment = () => {
  const n = useNavigate();
  const d = useDispatch();
  const products = useSelector((state) => {
    return state.cart;
  });
  //console.log(s)
  const user = useSelector((state) => {
    return state.user;
  });

  const order = async () => {
    console.log("order");
    await axios.post(`http://localhost:8080/updatecart/${user.id}`, products);
    d(clearCart());
    n("/");
  };

  return (
    <div>
      <h2>Payment Options</h2>
      <select>
        <option>UPI</option>
        <option>Pay Pal</option>
        <option>Credit Card/Debit Card</option>
      </select>
      <button onClick={order}>Proceed</button>
    </div>
  );
};

export default Payment;
