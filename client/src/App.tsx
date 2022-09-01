import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Error, Signup, Login } from "./pages/index";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
