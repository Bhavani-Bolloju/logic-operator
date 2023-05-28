import React from "react";
import { useDispatch } from "react-redux";
import { resultHandler, setOption } from "../redux-store/logic-slice";

function LogicOptions({ onSelect, onReset }) {
  return (
    <div className="inputOptions">
      <select
        onChange={(e) => {
          onSelect(e.target.value);
        }}
      >
        <option value="">select...</option>
        <option value="constant">constant</option>
        <option value="argument">argument</option>
        <option value="and">and</option>
        <option value="or">or</option>
      </select>
      <button onClick={onReset}>X</button>
    </div>
  );
}

export default LogicOptions;
