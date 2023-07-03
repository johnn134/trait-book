//  https://mui.com/material-ui/react-tabs/

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      //  Important
      hidden={value !== index}
      //  not
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

{
  /* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
</TabPanel> */
}
// //  #region State

// const [value, setValue] = React.useState(0);

// //  #endregion

// //  #region Handlers

// const handleChange = (_: React.SyntheticEvent, newValue: number) => {
//   setValue(newValue);
// };

//  #endregion

export default TabPanel;
