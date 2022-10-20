import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MoviesProvider } from "./context/moviesContext";
import { UserProvider } from "./context/userContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MoviesProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </MoviesProvider>
  </React.StrictMode>
);
