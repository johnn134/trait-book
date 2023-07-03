import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

import AppBar from "@/components/core/navigation/AppBar";
import HelloWorld from "@/components/modules/HelloWorld";
import TraitBook from "@/components/modules/TraitBook";

import TabPanel from "@/components/core/tabs/TabPanel";

import { a11yProps } from "@/utilities/GenericUtilities";

import "./App.css";

const App = (): React.ReactElement => {
  //  #region State

  const [value, setValue] = React.useState(0);

  //  #endregion

  //  #region Handlers

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //  #endregion

  //  #region Effects

  //  #endregion

  //  #region Conditional Components

  //  #endregion

  //  #region Render

  return (
    <Box id="app-container">
      <AppBar />
      <Box id="app-content"></Box>
    </Box>
  );

  //  #endregion
};

export default App;
