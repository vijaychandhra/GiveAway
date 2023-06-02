import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createshipping, setshippingaddress } from "../Redux/Reduxtoolkit";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const d = useDispatch();
  const n = useNavigate();
  const user = useSelector((s) => {
    return s.user;
  });
  const [flag, setFlag] = useState(false);
  const shippingaddress = useSelector((s) => {
    return s.shipping;
  });
  console.log(flag);

  const [shipping, setShipping] = useState(shippingaddress);

  function fun() {
    console.log(shipping);
    postshipping();
    n("/payment");
    // d(createshipping())
  }

  const postshipping = async () => {
    console.log(user.name);
    d(setshippingaddress(shipping));
    const api = await axios.post(
      `http://localhost:8080/setshipping/${user.name}`,
      shipping
    );
    console.log(api.data);
  };

  const getshipping = async () => {
    console.log(user.name);
    const api = await axios.get(
      `http://localhost:8080/getshipping/${user.name}`
    );
    //const data=api.data
    console.log(api.data);
    d(setshippingaddress(api.data));
  };

  return (
    <div>
      <h2>SHIPPING</h2>

      {shippingaddress.address ? (
        <div>
          <h4> address:{shipping.address}</h4>
          <h4>city:{shipping.city}</h4>
          <h4>Postalcode:{shipping.postalCode}</h4>
          <h4>Country:{shipping.country}</h4>

          <button
            onClick={(e) => {
              setFlag(!flag);
            }}
          >
            Change Address
          </button>
        </div>
      ) : (
        <div>
          <label>Address</label>
          <input
            type="text"
            value={shipping.address}
            onChange={(e) => {
              setShipping({ ...shipping, address: e.target.value });
            }}
          ></input>

          <label>city</label>
          <input
            type="text"
            value={shipping.city}
            onChange={(e) => {
              setShipping({ ...shipping, city: e.target.value });
            }}
          ></input>

          <label>PostalCode</label>
          <input
            type="text"
            value={shipping.postalCode}
            onChange={(e) => {
              setShipping({
                ...shipping,
                postalCode: e.target.value,
              });
            }}
          ></input>

          <label>Country</label>
          <input
            type="text"
            value={shipping.country}
            onChange={(e) => {
              setShipping({ ...shipping, country: e.target.value });
            }}
          ></input>

          <button onClick={(e) => fun()}>Proceed</button>
        </div>
      )}

      {flag && (
        <div>
          <label>Address</label>
          <input
            type="text"
            value={shipping.address}
            onChange={(e) => {
              setShipping({ ...shipping, address: e.target.value });
            }}
          ></input>

          <label>city</label>
          <input
            type="text"
            value={shipping.city}
            onChange={(e) => {
              setShipping({ ...shipping, city: e.target.value });
            }}
          ></input>

          <label>PostalCode</label>
          <input
            type="text"
            value={shipping.postalCode}
            onChange={(e) => {
              setShipping({
                ...shipping,
                postalCode: e.target.value,
              });
            }}
          ></input>

          <label>Country</label>
          <input
            type="text"
            value={shipping.country}
            onChange={(e) => {
              setShipping({ ...shipping, country: e.target.value });
            }}
          ></input>

          <button onClick={(e) => fun()}>Proceed</button>
        </div>
      )}
    </div>
  );
};

export default Shipping;
