import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SharedLayout,
  Home,
  Error,
  Signup,
  Login,
  SingleTitle,
  Trending,
  TopRated,
  Browse,
  Reviews,
  WatchList,
} from "./pages/index";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="toprated" element={<TopRated />} />
          <Route path="trending" element={<Trending />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="watchlist" element={<WatchList />} />
        </Route>
        <Route path="/title/:id" element={<SingleTitle />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
