import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

const DRAWER_WIDTH = 240;

const SideBar = () => {
  const location = useLocation();
  const itemSelectedDefault = location.pathname.split("/")[2] ? 1 : 0;
  const [selectedItem, setSelectedItem] = useState<number>(itemSelectedDefault);
  const navigate = useNavigate();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    text: string
  ) => {
    setSelectedItem(index);
    navigate(`/${text.toLowerCase()}`);
  };

  const itemList = [
    {
      text: "Dashboard",
      icon: <InboxIcon />,
      path: "dashboard",
    },
    {
      text: "Settings",
      icon: <MailIcon />,
      path: "dashboard/settings",
    },
  ];

  return (
    <>
      <Drawer
        variant='permanent'
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
          backgroundColor: "#f8f8f8",
        }}>
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {itemList.map((item, index) => {
              const { text, icon, path } = item;
              return (
                <ListItemButton
                  selected={selectedItem === index}
                  onClick={(event) => handleListItemClick(event, index, path)}
                  key={index}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
