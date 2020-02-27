import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "./App.css";
import { Typography, Paper, Button } from "@material-ui/core";
import logo from "../assets/cactus.png";

const db = () => firebase.database();

function Dashboard() {
  const [reservas, handleReservas] = useState([]);
  const [input, handleInput] = useState("");

  useEffect(() => {
    db();
    console.log("Mounted ");
  });

  useEffect(() => {
    db()
      .ref("/")
      .on("value", handleReservas);
  });

  const deleteColletion = () => {
    firebase
      .database()
      .ref("/")
      .remove();
  };

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function() {},
        function(error) {
          console.log(error);
        }
      );
  };

  const writeAdminData = userInfo => {
    firebase
      .database()
      .ref("/")
      .push({
        userInfo
      })
      .catch(error => {
        console.log("error ", error);
      });
  };

  const myData = JSON.stringify(reservas);
  const myDashboard = myData.split(",").map((item, i) =>
    item
      .replace(RegExp(/([.*+?^=!$(){}|[\]/\\""a-z])/g), " ")
      .replace("userInfo", "")
      .replace(":", "")
  );
  return (
    <div>
      <p>{myDashboard[0]}</p>
      <p>{myDashboard[1]}</p>
      <button onClick={() => logOut()}>Log Out</button>
    </div>
  );
}

export default Dashboard;
