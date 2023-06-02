import React, { useEffect } from "react";
import { setproducts } from "../Redux/Reduxtoolkit";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Product from "../Components/Products";
const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => {
    return state.product.products;
  });

  const fun = async () => {
    const api = await axios.get("http://localhost:8080/getallp");
    const d = await api.data;
    console.log(d);
    localStorage.setItem("products", JSON.stringify(d));

    dispatch(setproducts(d));
  };

  useEffect(() => {
    fun();
  }, []);

  return (
    <>
      <Row>
        {products && (
          <div>
            {products.map((product) => (
              <Col key={product._id} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </div>
        )}
      </Row>
    </>
  );
};

export default Main;
