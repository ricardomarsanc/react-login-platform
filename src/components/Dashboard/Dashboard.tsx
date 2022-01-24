import React from "react";
import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import SideBar from "./../SideBar/SideBar";
import ApplicationBar from "./../ApplicationBar/ApplicationBar";
import Weather from "./../Weather/Weather";

type DashboardProps = {
  tab: string;
};
const Dashboard = (props: DashboardProps) => {
  const { tab } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ApplicationBar />
      <SideBar />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {tab === "home" ? (
          <>
            <Typography paragraph>Home</Typography>
            <Weather />
          </>
        ) : (
          <Typography paragraph>Settings</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
