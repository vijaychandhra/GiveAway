import React from "react";
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, useNavigate, Form } from "react-router-dom";
import Rating from "../Components/Rating";
import { setcart, test1, clearCart } from "../Redux/Reduxtoolkit";

const Description = () => {
  var flag = 0;
  const d = useDispatch();
  const n = useNavigate();
  const product = useLocation().state;
  console.log(product);
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
          if (m.rating < m.countInStock) {
            newcart.push({ ...m, rating: m.rating + 1 });
          } else {
            newcart.push(m);
          }
          console.log("before", m.rating);
        } else {
          newcart.push(m);
        }
      });
      d(clearCart());
      if (flag == 0) {
        newcart.push(product);
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
      <Link to="/">Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
          {product.r ? (
            <div>
              <h4>Comments</h4>
              {product.r.map((m) => (
                <div>
                  <h6>name:{m.name}</h6>
                  <p>Rating:{m.rating}</p>
                  <p>Comments:{m.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <h3>No comments</h3>
          )}
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
                  <Col>Status: {product.countInStock} </Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  onClick={(e) => addtocart()}
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
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

export default Description;
