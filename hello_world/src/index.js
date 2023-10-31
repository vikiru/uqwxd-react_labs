import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
function ref() {
  root.render(<App />);
}
setInterval(ref, 1000);
