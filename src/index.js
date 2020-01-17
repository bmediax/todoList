import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const users = [
  {
    id: 1,
    name: "Brian",
    status: "Lorem ipsum dolor",
    date: "1/4/19"
  },
  {
    id: 2,
    name: "Joe",
    status: "I am eating right now lol",
    date: "4/22/09"
  },
  {
    id: 3,
    name: "Anthony",
    status: "I got so drunk yesterday",
    date: "7/16/04"
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App users={users} />, rootElement);
