import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const WriteReview = () => {
  const n = useNavigate();
  const name = useSelector((s) => {
    return s.user.name;
  });

  const product = useLocation().state;
  const [review, setReview] = useState({ name, rating: 1 });

  const fun = async () => {
    console.log(review);

    await axios.post(`http://localhost:8080/write/${product.name}`, review);
    n("/order");
  };

  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img
        src={product.image}
        variant="top"
        style={{ height: "100px", width: "100px" }}
      />

      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text as="h3">${product.price}</Card.Text>
        <select
          onChange={(e) => {
            setReview({ ...review, rating: e.target.value });
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}> 5</option>
        </select>

        <textarea
          value={review.comment}
          onChange={(e) => {
            setReview({ ...review, comment: e.target.value });
          }}
        ></textarea>
        <button
          onClick={() => {
            fun();
          }}
        >
          submit
        </button>
      </Card.Body>
    </Card>
  );
};
export default WriteReview;
