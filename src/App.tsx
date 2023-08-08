import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";

import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { ProductsByCategory } from "./pages/productsByCategory";
import { Questions } from "./pages/questions";
import { PageServerError } from "./pages/pageServerError";
import { CartProvider } from "./store/cart/cartProvider";
import { Checkout } from "./pages/checkout";
import { Login } from "./pages/login";
import { AdminDashboard } from "./pages/adminDashboard";
import { AdminProducts } from "./pages/adminProducts";
import { PageNotFound } from "./pages/pageNotFound";
import { AdminProductAdd } from "./pages/adminProductAdd";
import { AdminProductUpdate } from "./pages/adminProductUpdate";
import { AdminOrders } from "./pages/adminOrders";
import { AdminReport } from "./pages/adminReport";
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
        <Route path="*" element={<PageNotFound />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* admin */}
        {/* admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-products" element={<AdminProducts />} />
        <Route path="/admin-product/add" element={<AdminProductAdd />} />
        <Route
          path="/admin-product/update/:slug"
          element={<AdminProductUpdate />}
        />
        {/* order */}
        <Route path="/admin-orders" element={<AdminOrders />} />
        <Route path="/admin-report" element={<AdminReport />} />
      </Routes>
    </CartProvider>
  );
}
