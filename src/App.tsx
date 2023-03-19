import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { Questions } from "./pages/questions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:slug" element={<Product />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  );
}
