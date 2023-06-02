import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Product from "../Components/Products";

const Home = () => {
  const products = useSelector((s) => {
    return s.product;
  });
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
