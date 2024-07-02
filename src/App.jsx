/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from './Pages/Cart/Cart';
import { ShopContextProvider } from "./Context/ShopContext";
import Shop from "./Pages/Shop/Shop"
import Navbar from "./Navbar"


function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to="/shop" replace />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
