import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser, setshippingaddress } from "../Redux/Reduxtoolkit";

const Login = () => {
  const n = useNavigate();
  const dispatch = useDispatch();
  const [obj, setObj] = useState({});
  const s = useSelector((s) => {
    return s.user;
  });

  //let lname = localStorage.getItem('name')
  //let lpassword = localStorage.getItem('password')

  const sub = async (event) => {
    event.preventDefault();
    console.log("submitted");

    const val = await axios.post("http://localhost:8080/signin", obj);

    if (val.data.name == obj.name) {
      //localStorage.setItem('loggedin', true)
      //console.log("login" + val.data.shipping.address);
      dispatch(setUser(val.data));

      if (val.data.shipping != null) {
        dispatch(setshippingaddress(val.data.shipping));
      }
      if (val.data.isAdmin) {
        n("/adminpage");
      } else n("/");
    } else {
      setObj({ name: "", password: "" });
      n("/signin");
      alert("invalid credentials");
    }
  };

  function test(e) {
    e.preventDefault();
    console.log(obj.name, obj.password);
    if ("vijay" === obj.name && "123" === obj.password) {
      localStorage.setItem("user", true);
      console.log(localStorage.getItem("user"));
      //dispatch(setUserName(obj.name))
      //dispatch(setUserPassword(obj.password))
      n("/cart");
    } else {
      n("/signin");
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={(e) => sub(e)}>
        <label>FirstName</label>
        <input
          type="text"
          value={obj.name}
          onChange={(e) => setObj({ ...obj, name: e.target.value })}
        ></input>
        <label>Password</label>
        <input
          type="password"
          value={obj.password}
          onChange={(e) => setObj({ ...obj, password: e.target.value })}
        ></input>
        <button type="submit">Login</button>
        <Link to="/signup">signup</Link>
      </form>
    </div>
  );
};

export default Login;
