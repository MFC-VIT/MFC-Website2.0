import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { ModalProvider } from "./components/Modal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ModalProvider>
        <App />
      </ModalProvider>
    </React.StrictMode>
);
