import React, { Component } from "react";

const CTX = React.createContext();
const initState = {
  general: [
    { from: "aaron", msg: "hello" },
    { from: "arnold", msg: "hello" },
    { from: "archer", msg: "hello" }
  ],
  topic2: [
    { from: "aaron", msg: "hello" },
    { from: "arnold", msg: "hello" },
    { from: "archer", msg: "hello" }
  ]
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECIEVE_MESSAGE":
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }]
      };
    default:
      return state;
  }
}
function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);
  return <CTX.Provider value={reducerHook}>{props.childern}</CTX.Provider>;
}

export default Store;
