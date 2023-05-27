import React, { useEffect, useState } from "react";
import LogicOptions from "./LogicOptions";
import { useDispatch, useSelector } from "react-redux";
import { resultHandler, setOption } from "../redux-store/logic-slice";
import Options from "./Options";
import Constant from "./Constant";
import Arguments from "./Arguments";

function AndLogic({ option, onSelect, onResult, onReset, argId, argList }) {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [logicOperator, setLogicOperator] = useState(option);
  // console.log(option1, "op1");

  const logic = logicOperator == "and" ? "&&" : "||";

  // console.log(logic);

  useEffect(() => {
    if (option1 == "constant") {
      setResult1(false);
      onResult(logicOperator === "and" ? false && result2 : false || result2);
    }

    if (option1 == "argument") {
      setResult1(argList[0].status);
      onResult(
        logicOperator == "and"
          ? argList[0].status && result2
          : argList[0].status || result2
      );
    }
  }, [option1, logicOperator]);

  useEffect(() => {
    if (option2 == "constant") {
      setResult2(false);
      onResult(logicOperator === "and" ? result1 && false : result1 || false);
    }

    if (option2 == "argument") {
      setResult2(argList[0].status);
      onResult(
        logicOperator === "and"
          ? result1 && argList[0].status
          : result1 || argList[0].status
      );
    }
  }, [option2, logicOperator]);

  useEffect(() => {
    if (logicOperator == "and") {
      onResult(!!result1 && !!result2);
    } else {
      onResult(!!result1 || !!result2);
    }
  }, [logicOperator]);

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

    if (logicOperator == "and") {
      if (result2 == "") {
        onResult("");
      }

      if (result2 !== "") {
        onResult(false);
      }
    }

    if (logicOperator == "or") {
      if (result2 == "") {
        onResult("");
      }

      if (result2 !== "") {
        onResult(result2);
      }
    }
  };

  const resetHandler2 = function () {
    setOption2("");
    setResult2("");

    if (logicOperator == "and") {
      if (result1 == "") {
        onResult("");
      }
      if (result1 !== "") {
        onResult(false);
      }
    }

    if (logicOperator == "or") {
      if (result1 == "") {
        onResult("");
      }
      if (result1 !== "") {
        onResult(result1);
      }
    }
  };

  //result
  const resultHandler1 = function (value) {
    const resultValue = value == "true" ? true : false;
    setResult1(resultValue);

    onResult(
      logicOperator === "and"
        ? resultValue && !!result2
        : resultValue || !!result2
    );
  };

  const resultHandler2 = function (value) {
    const resultValue = value == "true" ? true : false;
    setResult2(resultValue);

    onResult(
      logicOperator === "and"
        ? !!result1 && resultValue
        : !!result1 || resultValue
    );
  };

  const addOpHandler = function () {
    console.log("add op");
  };

  return (
    <div>
      <div>
        <select
          defaultValue={logicOperator}
          onChange={(e) => setLogicOperator(e.target.value)}
        >
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

      <div className="logicOptions">
        <Options
          option={option1}
          onSelect={option1Handler}
          onResult={resultHandler1}
          onReset={resetHandler1}
          argList={argList}
          argId={argId}
        />
        <Options
          option={option2}
          onSelect={option2Handler}
          onResult={resultHandler2}
          onReset={resetHandler2}
          argList={argList}
          argId={argId}
        />
        <button onClick={addOpHandler}>+add op</button>
      </div>
    </div>
  );
}

export default AndLogic;
