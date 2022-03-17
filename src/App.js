import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavHeader from "./layout/dashboard/components/navheader";
import Footer from "./layout/dashboard/components/footer";

// import Signin from './layout/authentication/signin';
// import Signup from './layout/authentication/signup';
// import Books from './layout/books';
// import Home from './layout/dashboard/home'
// import BookDropDown from "./layout/books/bookdropdown";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<NavHeader />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
