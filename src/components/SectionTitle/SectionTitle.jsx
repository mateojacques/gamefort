import { Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title, ...props }) => {
  return (
    <Typography
      variant="h5"
      marginBottom={3}
      className="text-muted"
      {...props}
      fontFamily="inherit"
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
