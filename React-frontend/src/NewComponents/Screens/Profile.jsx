import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createshipping, setshippingaddress } from "../Redux/Reduxtoolkit";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const u = useSelector((s) => {
    return s.user;
  });
  const n = useNavigate();

  const d = useDispatch();
  const shippingaddress = useSelector((s) => {
    return s.shipping;
  });
  const [shipping, setShipping] = useState(shippingaddress);

  const fun = async (e) => {
    e.preventDefault();
    console.log(user);
    const api = await axios.post("http://localhost:8080/updateuser", user);

    const data = await api.data;
    console.log(data + "data");
  };

  function ship(e) {
    e.preventDefault();
    console.log(shipping);
    postshipping();
    n("/profile");
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

  const [user, setUser] = useState(u);
  console.log(user);
  return (
    <Row>
      <Col md={4}>
        <h1>Profile</h1>
        <Form onSubmit={(e) => fun(e)}>
          <Form.Group controlId="name">
            <Form.Label>name </Form.Label>
            <Form.Control
              type="name"
              placeholder="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col>
        {user.isAdmin ? (
          <div></div>
        ) : (
          <div>
            <h3>Shipping Address</h3>

            <Form onSubmit={(e) => ship(e)}>
              <Form.Group controlId="Address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="name"
                  value={shipping.address}
                  onChange={(e) => {
                    setShipping({ ...shipping, address: e.target.value });
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>city</Form.Label>
                <Form.Control
                  type="name"
                  value={shipping.city}
                  onChange={(e) => {
                    setShipping({ ...shipping, city: e.target.value });
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="country">
                <Form.Label>country</Form.Label>
                <Form.Control
                  type="name"
                  value={shipping.country}
                  onChange={(e) => {
                    setShipping({ ...shipping, country: e.target.value });
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="postalCode">
                <Form.Label>postalCode</Form.Label>
                <Form.Control
                  type="name"
                  value={shipping.postalCode}
                  onChange={(e) => {
                    setShipping({ ...shipping, postalCode: e.target.value });
                  }}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary">
                Update
              </Button>
            </Form>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Profile;
