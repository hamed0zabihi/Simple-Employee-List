import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
  // create localStorage
  let dataLocalStorage = [];
  localStorage.setItem("met", JSON.stringify(dataLocalStorage));
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
