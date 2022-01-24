import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { logout } from "../../redux/reducers/user";
import { useDispatch } from "react-redux";
import { Menu, MenuItem, IconButton } from "@mui/material";
import styles from "./ApplicationBar.module.scss";
import { AccountCircle } from "@mui/icons-material";

const ApplicationBar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem color='inherit' onClick={() => dispatch(logout())}>
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
