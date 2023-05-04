import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      className="dropdown"
      backgroundColor={colors.primary[400]}
      borderRadius="15px"
    >
      <ul>
        <li> Edit Profile</li>
        <br />
        <li>Inbox</li>
        <br />
        <li>Logout</li>
      </ul>
    </Box>
  );
};

export default Profile;
