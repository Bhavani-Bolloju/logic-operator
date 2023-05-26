import React, { useEffect } from "react";
import { useState } from "react";

function Arguments({ onReset, argList, argId, option, onResult }) {
  const [currentArg, setCurrentArg] = useState(argList[0].id);

  useEffect(() => {
    if (option === "argument" && argId == currentArg) {
      const findArg = argList.findIndex((arg) => arg.id == currentArg);
      const status = argList[findArg].status;
      onResult(status);
    }
  }, [argId, currentArg, argList]);

  return (
    <div>
      <select
        onChange={(e) => {
          setCurrentArg(e.target.value);
          const findArg = argList.findIndex((arg) => arg.id == e.target.value);
          const status = argList[findArg].status;
          onResult(status);
        }}
      >
        {argList.map((arg) => (
          <option key={arg.id} value={arg.id}>
            {arg.text}
          </option>
        ))}
      </select>
      <button onClick={onReset}>X</button>
    </div>
  );
}

export default Arguments;
