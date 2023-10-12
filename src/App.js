import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./components/ProductsDetail";
import Login from "./pages/Login";
import { LoginContextProvider } from "./store/loginContext";
import LoginContext from "./store/loginContext";



function App() {
  const loginContext = useContext(LoginContext);
  console.log(loginContext);

  return (
    <LoginContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/store" element={<Store/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/store/:productId" element={<ProductDetail/>}></Route>
            <Route path="/contact" element={<ContactUs/>}></Route>
            <Route
              path="/login"
              element={ <Login />}
            />
          </Routes>
          <CartSidebar />
          <Footer />
        </div>
      </Router>
    </LoginContextProvider>
  );
}

export default App;