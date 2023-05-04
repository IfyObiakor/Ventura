import React, { useContext, useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Settings from "./Settings";

function NavBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const [isNotificationsClicked, setIsNotificationsClicked] = useState(false);
  const [isSettingsClicked, setIsSettingsClicked] = useState(false);

  const handleProfileClick = () => {
    setIsProfileClicked(!isProfileClicked)
    setIsNotificationsClicked(false)
    setIsSettingsClicked(false)
  }
  const handleSettingsClick = () => {
    setIsSettingsClicked(!isSettingsClicked)
    setIsNotificationsClicked(false)
    setIsProfileClicked(false)
  }
  const handleNotificationsClick = () => {
    setIsNotificationsClicked(!isNotificationsClicked)
    setIsSettingsClicked(false)
    setIsProfileClicked(false)
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SearchBar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <IconButton onClick={handleNotificationsClick}>
          <NotificationsIcon />
        </IconButton>
        <IconButton onClick={handleSettingsClick}>
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={handleProfileClick}>
          <PersonIcon />
        </IconButton>
      </Box>


      {isProfileClicked && <Profile /> }
      {isNotificationsClicked && <Notifications />}
      {isSettingsClicked && <Settings />}
    </Box>
  );
}

export default NavBar;
