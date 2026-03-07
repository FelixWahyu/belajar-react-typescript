import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import PageNotFound from "./pages/404";
import Users from "./pages/Users";
import MainLayout from "./layouts/MainLayout";
import GuestLayout from "./layouts/GuestLayout";

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
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
