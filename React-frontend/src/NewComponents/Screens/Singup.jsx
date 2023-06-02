import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Redux/Reduxtoolkit";
import { useDispatch } from "react-redux";
import axios from "axios";

const Singup = () => {
  const n = useNavigate();
  const d = useDispatch();
  const [user, setuser] = useState({});

  const sub = async (event) => {
    event.preventDefault();
    console.log("submitted");

    //setuser({ ...user, id: user.name });
    console.log(user);
    const val = await axios.post("http://localhost:8080/signup", user);
    if (val.data.name == user.name) {
      console.log("singup successfull ");

      d(setUser(val.data));
      n("/");
    } else {
      setuser({ name: "", password: "", email: "" });
      n("/signup");
      alert("invalid credentials");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={(e) => sub(e)}>
        <label>Name</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => {
            setuser({ ...user, name: e.target.value });
          }}
        ></input>
        <label>Password</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        ></input>
        <label>Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
        ></input>

        <button type="submit">Singup</button>
      </form>
    </div>
  );
};

export default Singup;
