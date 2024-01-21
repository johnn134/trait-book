import React from "react";
import {
  //  I like it vertical
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useNavigate } from "react-router-dom";

import AppText from "@/config/AppText";
import AppRoutes from "@/config/AppRoutes";

import styles from "./styles/AppBar.style";

const ResponsiveAppBar = (): React.ReactElement => {
  //  #region STATE

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  //  #endregion

  //  #region HANDLERS

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const onNavClick = (page?: AppRoutes) => {
    switch (page) {
      case AppRoutes.HOME:
        navigate(AppRoutes.HOME);
        break;
      case AppRoutes.TEST:
        navigate(AppRoutes.TEST);
        break;
      default:
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //  #endregion

  //  #region CONDITIONAL COMPONENTS

  const appTitle = AppText.APP_TITLE.toUpperCase();

  //  #endregion

  return (
    <AppBar position="static" id="app-bar">
      <Toolbar disableGutters={false} id="app-tool-bar" style={{ justifyContent: "space-between" }}>
        {/* XS */}
        <Box id="xs-app-bar" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} />
        <AutoStoriesIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
          }}
          style={styles.typography}
        >
          {appTitle}
        </Typography>

        {/* MD */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <AutoStoriesIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => onNavClick(AppRoutes.ROOT)}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              ":hover": {
                cursor: "pointer",
              },
            }}
            style={styles.typography}
          >
            {appTitle}
          </Typography>
        </div>

        {/* AVATAR + MENU */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar>
                <MenuIcon />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Reset</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
