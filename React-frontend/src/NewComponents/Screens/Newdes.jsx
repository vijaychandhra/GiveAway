import React from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, useNavigate, Form } from "react-router-dom";
import Rating from "../Components/Rating";
import { setcart, test1, clearCart } from "../Redux/Reduxtoolkit";

const Newdes = () => {
  var flag = 0;
  const d = useDispatch();
  const n = useNavigate();
  const product = useLocation().state;
  const cartitems = useSelector((state) => {
    return state.cart;
  });

  function addtocart() {
    let newcart = [];
    console.log(cartitems);
    if (cartitems.length != 0) {
      cartitems.map((m) => {
        if (m.name == product.name) {
          flag = 1;
          console.log("before", m.rating);
          product.rating = m.rating + 1;
          console.log("after", m.rating);
          newcart.push(product);
        } else {
          newcart.push({ ...m, rating: m.rating + 1 });
        }
      });
      d(clearCart());
      if (flag == 0) {
        newcart.push({ ...product, rating: product.rating + 1 });
      }
      newcart.map((m) => {
        d(setcart(m));
      });

      n("/cart");
    } else {
      console.log("new product");
      d(setcart(product));
      n("/cart");
    }
  }
  return (
    <div>
      <Link to="/home">Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button onClick={addtocart} className="btn-block" type="button">
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Newdes;
