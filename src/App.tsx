import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";

import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { ProductsByCategory } from "./pages/productsByCategory";
import { Questions } from "./pages/questions";
import { PageServerError } from "./pages/pageServerError";
import { CartProvider } from "./store/cart/cartProvider";
import { Checkout } from "./pages/checkout";
export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route
          path="/category/:categorySlug"
          element={<ProductsByCategory />}
        />
        <Route path="/" element={<Dashboard />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/server-error" element={<PageServerError />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  );
}
