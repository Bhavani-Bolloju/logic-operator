import React from "react";
import AndLogic from "./AndLogic";
import Arguments from "./Arguments";
import LogicOptions from "./LogicOptions";
import Constant from "./Constant";

function Options({ option, onSelect, onResult, onReset, argList, argId }) {
  return (
    <div className="form">
      {option == "" && <LogicOptions onSelect={onSelect} onReset={onReset} />}
      {option == "constant" && (
        <Constant onSelect={onResult} onReset={onReset} />
      )}
      {option == "argument" && (
        <Arguments
          onReset={onReset}
          argList={argList}
          argId={argId}
          option={option}
          onResult={onResult}
        />
      )}
      {(option == "and" || option == "or") && (
        <AndLogic
          onReset={onReset}
          option={option}
          onSelect={onSelect}
          onResult={onResult}
          argId={argId}
          argList={argList}
        />
      )}
    </div>
  );
}

export default Options;
