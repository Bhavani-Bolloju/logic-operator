import React from "react";
import { useDispatch } from "react-redux";
import { editArg } from "../redux-store/logic-slice";

function Argument({ text, status, id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          dispatch(editArg({ value: e.target.value, id, type: "text" }));
        }}
      />
      <select
        defaultValue={status}
        onChange={(e) => {
          dispatch(editArg({ value: e.target.value, id, type: "status" }));
        }}
      >
        <option value={false}>false</option>
        <option value={true}>true</option>
      </select>
    </div>
  );
}

export default Argument;
