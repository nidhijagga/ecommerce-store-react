import React from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import ContactUs from "./pages/ContactUs";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/:productType/:productId" element={<ProductPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <CartSidebar/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
