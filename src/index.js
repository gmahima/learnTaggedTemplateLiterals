import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { string } from "prop-types";

function App() {
  const name = "some name";
  const topic = "react js";
  function highlight(strings, ...values) {
    let str = "";
    strings.forEach((string, i) => {
      console.log(string + "is string");
      console.log(values[i]);
      if (string) {
        str += `${string}`;
        console.log(str + "is str");
      }
      if (values[i]) {
        str += `${values[i]}`;
        console.log(str + "is str from values");
      }
    });
    return str;
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{highlight`Hi! ${name} is my name. I love ${topic}`}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
