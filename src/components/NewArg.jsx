import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArg, editArg } from "../redux-store/logic-slice";
import { memo } from "react";
import Argument from "./Argument";

function NewArg() {
  const { argList } = useSelector((state) => state.logic);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="newArg">
        {argList?.map((arg, i) => (
          <Argument
            text={arg.text}
            status={arg.status}
            key={arg.id}
            id={arg.id}
          />
        ))}
        <button
          onClick={() => {
            dispatch(addArg());
          }}
        >
          +add arg
        </button>
      </div>
    </div>
  );
}

export default memo(NewArg);
