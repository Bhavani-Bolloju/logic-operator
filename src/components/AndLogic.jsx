import React, { useEffect, useState } from "react";
import LogicOptions from "./LogicOptions";
import { useDispatch, useSelector } from "react-redux";
import { resultHandler, setOption } from "../redux-store/logic-slice";
import Options from "./Options";
import Constant from "./Constant";
import Arguments from "./Arguments";

function AndLogic({
  option,
  optionsHandler,
  onResult,
  onReset,
  argId,
  argList
}) {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  // console.log(option1, "op1");

  useEffect(() => {
    if (option1 == "constant") {
      setResult1(false);
      onResult(false && result2);
      // console.log(false, result2, !!result2, "1", false && result2);
    }
  }, [option1]);
  useEffect(() => {
    if (option2 == "constant") {
      setResult2(false);
      onResult(result1 && false);
      // console.log(!!result1, false, "2", result1 && false);
    }
  }, [option2]);

  // console.log(result1, "1");
  // console.log(result2, "2");

  const dispatch = useDispatch();

  //options 1 and 2
  const option1Handler = function (value) {
    setOption1(value);
  };
  const option2Handler = function (value) {
    setOption2(value);
  };

  //reset
  const resetHandler1 = function () {
    setOption1("");
    setResult1("");

    // if (result2 != "") {
    //   onResult(false);
    // }
    // onResult(false && result2);
    // console.log(result1, result2, result2 !== "");
  };

  const resetHandler2 = function () {
    setOption2("");
    setResult2("");
    // onResult(result1 && false);

    // if (result1 != "") {
    //   onResult(false);
    // }
    // console.log(result1, result2, result1 !== "");
  };

  // console.log(result1, result2);

  //result
  const resultHandler1 = function (value) {
    const resultValue = value == "true" ? true : false;
    setResult1(resultValue);

    onResult(resultValue && !!result2);
  };

  const resultHandler2 = function (value) {
    const resultValue = value == "true" ? true : false;
    setResult2(resultValue);

    // console.log(!!result1, resultValue, "2result", !!result1 && resultValue);

    onResult(!!result1 && resultValue);
  };

  const [constant, setConstant] = useState(false);

  return (
    <div>
      <div>
        <select name="" id="">
          <option value="and">and</option>
          <option value="or">or</option>
        </select>
        <button
          onClick={() => {
            onReset();
          }}
        >
          X
        </button>
      </div>

      <div>
        <div>
          {option1 == "" && (
            <LogicOptions onSelect={option1Handler} onReset={resetHandler1} />
          )}
          {option1 == "constant" && (
            <Constant onSelect={resultHandler1} onReset={resetHandler1} />
          )}
          {option1 == "argument" && (
            <Arguments
              onReset={resetHandler1}
              argList={argList}
              argId={argId}
              option={option1}
              onResult={resultHandler1}
            />
          )}
        </div>
        <div>
          {option2 == "" && (
            <LogicOptions onSelect={option2Handler} onReset={resetHandler2} />
          )}
          {option2 == "constant" && (
            <Constant onSelect={resultHandler2} onReset={resetHandler2} />
          )}
          {option2 == "argument" && (
            <Arguments
              onReset={resetHandler2}
              argList={argList}
              argId={argId}
              option={option2}
              onResult={resultHandler2}
            />
          )}
        </div>
      </div>
      <button>+add op</button>
    </div>
  );
}

export default AndLogic;
