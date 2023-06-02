import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../Components/Products";
import { Link } from "react-router-dom";

const Order = () => {
  const name = useSelector((s) => {
    return s.user.name;
  });
  const [data, setData] = useState([]);

  const fun = async () => {
    console.log(name);
    const api = await axios.get(`http://localhost:8080/getorderbyname/${name}`);
    const res = await api.data;
    setData(res);
  };

  console.log(data, "jj");
  useEffect(() => {
    fun();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <div>
          {data.map((m) => (
            <div>
              <h5>name:{m.name}</h5>
              <p>paid:{m.isPaid ? "Yes" : "No"}</p>
              <p>del:{m.isDelivered ? "Yes" : "No"}</p>
              {m.orderItems.map((product) => (
                <Product product={product} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3>No Orders</h3>
          <Link to="/">Start order</Link>
        </div>
      )}
    </div>
  );
};

export default Order;
