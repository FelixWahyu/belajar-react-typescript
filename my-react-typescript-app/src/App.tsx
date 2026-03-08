import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard";
import PageNotFound from "./pages/404";
import Users from "./pages/users/users";
import MainLayout from "./layouts/MainLayout";
import GuestLayout from "./layouts/GuestLayout";
import Orders from "./pages/orders/orders";
import Products from "./pages/products/productsIndex";
import Settings from "./pages/settings";
import Details from "./pages/products/details";
import Create from "./pages/products/create";

function App() {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="dashboard" element={<MainLayout namaBisnis="Toko Sembako" />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="create" element={<Create />} />
        <Route path="products/:itemId" element={<Details />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
