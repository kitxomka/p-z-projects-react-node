import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material/";
import CONSTANTS from "../redux/constants";

import "./components.css";

const SaveButton = () => {
  const { creatorName, comment, date, newRow } = useSelector((state) => state);
  const dispatch = useDispatch();
  const products = newRow;
  console.log('products', products)

  const resetForm = () => {
    dispatch({
      type: CONSTANTS.RESET_FORM
    });
  };

  const postToServer = () => {
    const usersProducts = {
      creatorName,
      comment,
      date,
      products
    };
    axios
      .post('http://localhost:4000/insert-data', usersProducts)
      .then(() => console.log("Created"))
      .catch((err) => {
        console.log(err, "There appears some error");
      });
  };

  const saveComment = (e) => {
    e.preventDefault();
    if (creatorName.length === 0 || comment.length === 0) {
      alert("All fields are required!");
    } else {
    //   alert("You're data has been saved"); // This should be on save success callback 
    }
    console.log(creatorName, comment, date, products);
    postToServer();
    resetForm();
  };

  return (
    <Button
      disableElevation
      variant="contained"
      color="primary"
      className="btn"
      onClick={saveComment}
    >
      Save
    </Button>
  );
};

export default SaveButton;
