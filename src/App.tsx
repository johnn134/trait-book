import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
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
    <Box id="app-container">
      <AppBar />
      <Box id="app-content">
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
