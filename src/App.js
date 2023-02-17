import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import {Routes, Route, Navigate} from "react-router";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import SignIn from "./components/signin/Signin";
import SignUp from "./components/signup/SignUp";

const App = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Navigate to={"/home"}/>}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
    </>
  )
};

export default App;