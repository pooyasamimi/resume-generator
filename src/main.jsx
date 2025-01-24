import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import InfoProvider from "./contexts/InfoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InfoProvider>
      <App />
    </InfoProvider>
  </StrictMode>
);
