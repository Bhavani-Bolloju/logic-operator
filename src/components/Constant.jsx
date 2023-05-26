import React from "react";

function Constant({ onSelect, onReset }) {
  return (
    <div>
      <select
        onChange={(e) => {
          onSelect(e.target.value);
        }}
      >
        <option value={false}>false</option>
        <option value={true}>true</option>
      </select>
      <button onClick={onReset}>X</button>
    </div>
  );
}

export default Constant;
