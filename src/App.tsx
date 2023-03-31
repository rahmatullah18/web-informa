import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";

import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { ProductsByCategory } from "./pages/productsByCategory";
import { Questions } from "./pages/questions";

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/:class/:category" element={<ProductsByCategory />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  );
}
