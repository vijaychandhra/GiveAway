import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link, useNavigate } from "react-router-dom";
import { SetUsers, clear, deleteUsers, setUser } from "../Redux/Reduxtoolkit";
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const n = useNavigate();
  const d = useDispatch();
  const users = useSelector((s) => {
    return s.users.users;
  });

  const fun = async () => {
    const a = await axios.get("http://localhost:8080/getusers");
    const users1 = await a.data;
    console.log(users1, "ll");
    d(SetUsers(users1));
    // users1.map((m) => {
    //   console.log("dispatching users");
    //   d(SetUsers(m));
    // });
    //console.log(users);
  };
  useEffect(() => {
    fun();
  }, []);

  const remove = async (id) => {
    console.log("user deleted////////////");
    d(deleteUsers(id));
    const del = await axios.post(`http://localhost:8080/deleteuser/${id}`);
    d(clear());
    console.log(del);
    d(SetUsers(del.data));
    console.log("user deleted///////");
  };

  const deleteall = () => {
    d(clear());
  };
  return (
    <div>
      <h3>User List</h3>

      {users?.map((user) => (
        <div key={user.id}>
          <Card>
            <Card.Body>
              <Card.Text
              // as="div"
              // onClick={(e) => {
              //   n("/user", { state: user });
              // }}
              >
                <strong>{user.name} </strong>
                <button
                  onClick={(e) => {
                    remove(user.id);
                  }}
                >
                  Delete
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Admin;
