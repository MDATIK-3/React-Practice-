import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Atik from "./atik";

import Counter from "./Counter";

// const Element = (
//   <a href="https://google.com" terget="_blank">
//     Visit Google
//   </a>
// );
// const reactElement = React.createElement(
//   "div",
//   { className: "my-class" },
//   "Hello World"
// );
// {reactElement}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <Counter /> */}
    <App />
  </>
);
