import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./i18n";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div className="suspense"></div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
