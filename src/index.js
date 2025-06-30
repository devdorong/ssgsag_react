import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 컴포넌트
import App from "./App";

import IndexPage from "./pages/IndexPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    <IndexPage></IndexPage>
  </div>,
);
