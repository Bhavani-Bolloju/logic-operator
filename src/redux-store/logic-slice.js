import { createSlice } from "@reduxjs/toolkit";

const argList = [
  {
    text: "My Arg",
    status: false,
    id: "a1"
  }
];
const initialState = {
  option: "",
  argList: [...argList],
  result: "",
  argId: argList[0].id
};

const logic = createSlice({
  name: "logic",
  initialState,
  reducers: {
    setOption: (state, action) => {
      state.option = action.payload;
    },
    addArg: (state) => {
      const newArg = {
        text: "newArg",
        status: false,
        id: "a" + (state.argList.length + 1)
      };
      state.argList.push(newArg);
    },
    editArg: (state, action) => {
      const { id, type, value } = action.payload;
      state.argId = id;
      const allArgs = [...state.argList];
      const index = allArgs.findIndex((arg) => arg.id == id);
      const editArg = allArgs[index];
      const update = {
        ...editArg,
        [type == "text" ? "text" : "status"]: value
      };
      allArgs[index] = update;
      state.argList = allArgs;
    },
    resultHandler: (state, action) => {
      state.result = action.payload.toString();
    }
  }
});

export const reducers = logic.reducer;

export const { setOption, addArg, editArg, resultHandler } = logic.actions;
