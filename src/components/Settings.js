import React from 'react'
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      className="dropdown"
      backgroundColor={colors.primary[400]}
      borderRadius="15px"
    >
      <ul>
        <li>General</li>
        <br />
        <li>Test Connection</li>
        <br/>
        <li>Change Password</li>
        <br />
        <li>Deactivate Account</li>
      </ul>
    </Box>
  )
}

export default Settings;
