import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SharedLayout, Home, Error, Signup, Login } from "./pages/index";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
