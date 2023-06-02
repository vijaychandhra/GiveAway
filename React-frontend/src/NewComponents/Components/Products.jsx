import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  const n = useNavigate();
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img
        src={product.image}
        variant="top"
        onClick={(e) => n("/des", { state: product })}
        style={{ height: "200px", width: "200px" }}
      />

      <Card.Body>
        <Card.Title
          as="div"
          onClick={(e) => {
            n("/des", { state: product });
          }}
        >
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>

        {product.r &&
          product.r.map((m) => {
            <h4>{m}</h4>;
          })}
        <Button
          onClick={(e) => {
            n("/write", { state: product });
          }}
        >
          Write
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
