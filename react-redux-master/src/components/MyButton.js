import React from "react";
import increment from "../actions";
import { useDispatch } from "react-redux";
const MyButton = () => {
  let dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(increment(1))}>Increase counter</button>
  );
};
export default MyButton;
