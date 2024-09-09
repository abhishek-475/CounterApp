import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  countWithNum
} from "./redux/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counterReducer.counter);
  console.log(count);
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center t"
        style={{ height: "80vh" }}>
        <div className="w-75 border border-2 border-light p-5">
          <h3 className="text-center text-primary">Counter</h3>
          <h2 className="text-center text-light">{count}</h2>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-success me-3"
              onClick={() => {
                dispatch(increment());
              }}>
              + Increment
            </button>
            <button
              className="btn btn-outline-danger me-3"
              onClick={() => {
                dispatch(decrement());
              }}>
              - Decrement
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => {
                dispatch(reset());
              }}>
              Reset
            </button>
          </div>
          <div className="my-3 d-flex justify-content-around">
            <input className="form-control"
              type="number"
              onChange={(e) => {
                setNum(e.target.value);
              }}
              placeholder="Enter the Count"
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(countWithNum(num));
              }}>
              Count
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
