import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App, { appLoader } from "@/App";
import HelloWorld from "@/components/modules/HelloWorld";
import TraitBook from "@/components/modules/TraitBook";
import RoutingError from "@/components/modules/RoutingError";

import Store from "@/store/storage";

import AppRoutes from "./config/AppRoutes";

import "./index.css";

const darkTheme = createTheme({ palette: { mode: "dark" } });
// const lightTheme = createTheme({ palette: { mode: "light" } });

const state = Store.loadStore();

const router = createBrowserRouter([
  {
    path: AppRoutes.ROOT,
    element: <App />,
    loader: appLoader,
    errorElement: <RoutingError />,
    children: [
      {
        path: AppRoutes.ROOT,
        element: <TraitBook state={state} saveState={Store.saveStore} />,
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
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
