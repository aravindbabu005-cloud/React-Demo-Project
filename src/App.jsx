
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Product from "./pages/products";

function App() {
  return (
    <BrowserRouter basename="/BuySphere">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
