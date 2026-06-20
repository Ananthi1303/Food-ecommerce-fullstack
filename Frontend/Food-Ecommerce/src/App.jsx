import { useState } from "react";
import {  Routes, Route, useLocation  } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AddFood from "./Pages/AddFood";
import Foods from "./Pages/Foods";
import Cart from "./pages/Cart";
import Logout from "./pages/Logout";
import Navbar from "./Pages/Navbar";
import Order from "./Pages/Order";
import OrderHistory from "./Pages/OrderHistory";

function App() {
    const [cartCount, setCartCount] = useState(0);
    const location = useLocation();

  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/register";

  return (
        
        <>          
         {!hideNavbar && <Navbar cartCount={cartCount} />}
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/addfood" element={<AddFood />} />

        <Route path="/foods" element={<Foods setCartCount={setCartCount} />} />

       <Route path="/cart" element={<Cart />} />

       <Route path="/order" element={<Order/>} />

       <Route path="/orderhistory" element={<OrderHistory />} />

        <Route path="/logout" element={<Logout />} />

      </Routes>
      </>
  );
}

export default App;
