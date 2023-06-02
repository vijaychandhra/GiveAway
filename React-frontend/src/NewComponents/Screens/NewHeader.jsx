import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Dropdown,
  Button,
} from "react-bootstrap";
import { clearCart, deleteUser, deleteshipping } from "../Redux/Reduxtoolkit";
import { useNavigate } from "react-router-dom";

const NewHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const u = useSelector((s) => {
    return s.user;
  });

  const logout = () => {
    console.log("logout");
    dispatch(deleteUser());
    dispatch(clearCart());
    dispatch(deleteshipping());
    navigate("/");
  };

  const clearlocal = () => {
    localStorage.clear();
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>GiveAway</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {u.isAdmin ? (
                <LinkContainer to="/users">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Users
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Nav.Link>
                </LinkContainer>
              )}
              {u.name && <Button onClick={(e) => logout()}>logout</Button>}

              {u.name ? (
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    {u.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/profile")}>
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/order")}>
                      Orders
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <LinkContainer to="/signin">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NewHeader;
