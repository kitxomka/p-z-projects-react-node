import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material/";
import CONSTANTS from "../redux/constants";

import "./components.css";

const SaveButton = () => {

  // brings the needed objects from from the state
  const { creatorName, comment, date, newRow } = useSelector((state) => state);
  const dispatch = useDispatch();

  const products = newRow;
  console.log('products', products)


  /** 
  * dispatch on "RESET_FORM" action
  */
  const resetForm = () => {
    dispatch({
      type: CONSTANTS.RESET_FORM
    });
  };

  /**
   * sends usersProducts to the server, and the server will store it on the database
   */
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


  /**
   * 
   * @param {*} e 
   * Before saving the data we are checking if certain fields are not empty
   * if they are not empty post to server and reset the form
   * 
   */
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
