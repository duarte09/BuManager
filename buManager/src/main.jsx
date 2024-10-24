import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LojaContextProvider from "./context/LojaContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LojaContextProvider>
      <App />
    </LojaContextProvider>
  </StrictMode>
);
