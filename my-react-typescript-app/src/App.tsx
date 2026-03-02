import "./App.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import IndexPage from "./pages/login";
import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <RouterProvider router={router} />,
    </main>
  );
}

export default App;
