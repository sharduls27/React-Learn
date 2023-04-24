import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);

//pure javascript version
var h1 = document.createElement("h1");
h1.innerHTML = "hello world!!";
document.getElementById("root").appendChild(h1);
