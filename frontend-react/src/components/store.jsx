import React, { Component } from "react";
import MyContext from './MyContext.js';
import io from 'socket.io-client'
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

let socket;

function sendChatAction(value) {
  socket.emit('chat message', value);

}
export default function Store(props) {

  const [allChats, dispatch] = React.useReducer(reducer, initState);

  if (!socket) {
    socket = io(':3001')
    socket.on('chat message', function (msg) {
      dispatch({ type: 'RECIEVE_MESSAGE', payload: msg })
    });
  }

  const user = 'Thira' + Math.random(100).toFixed(2)


  return (
    <MyContext.Provider
      value={{ allChats, sendChatAction, user }}
    >
      {props.children}
    </MyContext.Provider>
  );


  // return <CTX.Provider value={reducerHook}>{props.childern}</CTX.Provider>;

}





// return (<CTX.Provider value={reducerHook}>
//   {props.childern}
//   </CTX.Provider>)