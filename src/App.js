import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <CartSidebar/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
