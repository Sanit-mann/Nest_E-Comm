import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/css/index.css";
import "./assets/css/uicons-regular-straight.css";
import App from "./pages/App.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Blog_post from "./pages/Blog_post.jsx";
import Account from "./pages/Account.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/login.jsx";
import NotFound from "./pages/404.jsx";
import Register from "./pages/register.jsx";
import PurchaseGuide from "./pages/purchase_guide.jsx";
import Terms_of_service from "./pages/terms_of_service.jsx";
import Cart from "./pages/cart.jsx";
import Checkout from "./pages/checkout.jsx";
import Compare from "./pages/compare.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "account", element: <Account /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "about", element: <About /> },
      { path: "shop", element: <Shop /> },
      { path: "login", element: <Login /> },
      { path: "cart", element: <Cart /> },
      { path: "compare", element: <Compare /> },
      { path: "checkout", element: <Checkout /> },
      { path: "contact", element: <Contact /> },
      { path: "register", element: <Register /> },
      { path: "tos", element: <Terms_of_service /> },
      { path: "purchaseGuide", element: <PurchaseGuide /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
