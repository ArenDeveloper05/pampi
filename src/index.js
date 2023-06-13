import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Paths
import {
  BABYPAGE,
  BOYPAGE,
  CATALOGPAGE,
  GIRLPAGE,
  HOMEPAGE,
  TODDLER_BOYPAGE,
  TODDLER_GIRLPAGE,
} from "./paths/paths";
//Pages
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import BabyPage from "./pages/BabyPage";
import ToddlerGirlPage from "./pages/ToddlerGirlPage";
import ToddlerBoyPage from "./pages/ToddlerBoyPage";
import GirlPage from "./pages/GirlPage";
import BoyPage from "./pages/BoyPage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: HOMEPAGE,
    element: <HomePage />,
  },
  {
    path: CATALOGPAGE,
    element: <CatalogPage />,
  },
  {
    path: BABYPAGE,
    element: <BabyPage />,
  },
  {
    path: TODDLER_GIRLPAGE,
    element: <ToddlerGirlPage />,
  },
  {
    path: TODDLER_BOYPAGE,
    element: <ToddlerBoyPage />,
  },
  {
    path: GIRLPAGE,
    element: <GirlPage />,
  },
  {
    path: BOYPAGE,
    element: <BoyPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
