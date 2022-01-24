import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { logout } from "../../redux/reducers/user";
import { useDispatch } from "react-redux";
import { Menu, MenuItem, IconButton } from "@mui/material";
import styles from "./ApplicationBar.module.scss";
import { AccountCircle } from "@mui/icons-material";
import { auth } from "../../firebaseConfig";

const ApplicationBar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleLogout = () => {
    dispatch(logout());
    auth.signOut();
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar className={styles.toolbar}>
          <Typography variant='h6' noWrap component='div'>
            dashboard
          </Typography>
          <div>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'>
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem color='inherit' onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ApplicationBar;
