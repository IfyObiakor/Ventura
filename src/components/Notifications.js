import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Notifications = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
      <Box
        className="dropdown"
        backgroundColor={colors.primary[400]}
        borderRadius="15px"
        color={colors.greenAccent[400]}
      >
        <p>No New Notifications</p>
      </Box>
  );
};

export default Notifications;
