import React, { useState, useEffect } from "react";
import Options from "./components/Options";
import NewArg from "./components/NewArg";
import { useSelector, useDispatch } from "react-redux";
import { setOption, resultHandler } from "./redux-store/logic-slice";

function App() {
  const { option, argList, result, argId } = useSelector(
    (state) => state.logic
  );

  const dispatch = useDispatch();

  const changeResultHandler = function (value) {
    dispatch(resultHandler(value));
  };

  useEffect(() => {
    if (option === "constant") {
      changeResultHandler(false);
    }
    if (option === "argument") {
      const findArg = argList.findIndex((arg) => arg.id === argList[0].id);
      dispatch(resultHandler(argList[findArg].status));
    }
  }, [option]);

  const optionsHandler = function (value) {
    dispatch(setOption(value));
  };

  const resetHandler = function () {
    dispatch(resultHandler(""));
    dispatch(setOption(""));
  };

  console.log(option);

  return (
    <div className="options">
      <NewArg />
      <Options
        option={option}
        onSelect={optionsHandler}
        onResult={changeResultHandler}
        onReset={resetHandler}
        argId={argId}
        argList={argList}
      />
      <div className="result">
        <span>result:</span>
        <span>{result == "" ? "undefined" : result}</span>
      </div>
    </div>
  );
}

export default App;
