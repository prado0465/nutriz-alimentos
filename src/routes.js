import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Products from "./pages/Products/index";
import Contact from "./pages/Contact/index";
import Payment from './pages/Payment';


function AppRoutes() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/suport" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
