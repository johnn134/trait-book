import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

import HelloWorld from '@/components/modules/HelloWorld';
import TraitBook from '@/components/modules/TraitBook';

import TabPanel from '@/components/core/Tabs/TabPanel';

import { a11yProps } from '@/utilities/GenericUtilities';

import './App.css';

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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit">
          <Tab label="HelloWorld" {...a11yProps(0)} />
          <Tab label="TraitBook" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HelloWorld />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TraitBook />
      </TabPanel>
    </Box>
  );

  //  #endregion
};

export default App;
