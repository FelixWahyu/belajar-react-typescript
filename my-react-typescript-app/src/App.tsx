import "./App.css";
import { Routes, Route } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
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
import Categories from "./pages/categories/categoriesIndex";
import Details from "./pages/products/details";
import Create from "./pages/products/create";
import CreateCategory from "./pages/categories/createPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<MainLayout namaBisnis="Toko Sembako" />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="orders" element={<Orders />} />
            <Route path="category" element={<Categories />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="products" element={<Products />} />
            <Route path="create-product" element={<Create />} />
            <Route path="products/:itemId" element={<Details />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
