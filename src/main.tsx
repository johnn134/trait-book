import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App, { appLoader } from "@/App";
import HelloWorld from "@/components/modules/HelloWorld";
import TraitBook from "@/components/modules/TraitBook";
import RoutingError from "./components/modules/RoutingError";

import AppRoutes from "./config/AppRoutes";

import "./index.css";

const router = createBrowserRouter([
  {
    path: AppRoutes.ROOT,
    element: <App />,
    loader: appLoader,
    errorElement: <RoutingError />,
    children: [
      {
        path: AppRoutes.HOME,
        element: <TraitBook />,
      },
      {
        path: AppRoutes.TEST,
        element: <HelloWorld />,
      },
    ],
  }, // RouteObject
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
