import React, { Component } from "react";
import MyContext from './MyContext.js';

//const CTX = React.createContext();
const initState = {
  general: [
    { from: "aaron", msg: "hello aaron" },
    { from: "arnold", msg: "hello arnold" },
    { from: "archer", msg: "hello archer" }
  ],
  topic2: [
    { from: "aaron", msg: "aaron hello" },
    { from: "arnold", msg: "arnold hello" },
    { from: "archer", msg: "archer hello" }
  ]
};



function reducer(state, action) {
  //const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECIEVE_MESSAGE":
      return {
        ...state,
        [action.payload.topic]: [
          ...state[action.payload.topic],
          {
            from: action.payload.from,
            msg: action.payload.msg
          }
        ]
      }
    default:
      return state;
  }
}
// export default function Store(props) {

export default function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);


  return (
    <MyContext.Provider
      value={reducerHook}
    >
      {props.children}
    </MyContext.Provider>
  );


  // return <CTX.Provider value={reducerHook}>{props.childern}</CTX.Provider>;

}





// return (<CTX.Provider value={reducerHook}>
//   {props.childern}
//   </CTX.Provider>)