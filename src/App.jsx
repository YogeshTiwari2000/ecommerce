/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import { ShopContextProvider } from "./Context/ShopContext";

function App() {
  return (
    <>

      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path="/" element={<Shop />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>

    </>


  );
}

export default App;
