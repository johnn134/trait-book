import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import AppBar from "@/components/core/navigation/AppBar";

import "./App.css";

const App = (): React.ReactElement => {
  //  #region State

  //  #endregion

  //  #region Handlers

  //  #endregion

  //  #region Effects

  //  #endregion

  //  #region Conditional Components

  //  #endregion

  //  #region Render

  return (
    <Box id="app-container" style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <AppBar />
      <Box
        id="app-content"
        sx={{
          width: "calc(100vw - 32px)",
          height: { xs: "calc(100svh - 64px - 32px)", md: "calc(100vh - 64px - 32px)" },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );

  //  #endregion
};

export const appLoader = async () => {
  return Promise.resolve(null).then((val) => {
    console.log("Wow, a loader function");
    return val;
  });
};

export default App;
