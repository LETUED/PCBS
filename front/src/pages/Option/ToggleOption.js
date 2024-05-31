import React from "react";
import { Stack, Switch, Typography, Box } from "@mui/material";

function ToggleOption({ label, value, onChange }) {
  return (
    <Box sx={{ borderBottom: '1px solid lightgray', py: 2 }}>
      <Stack direction="column" spacing={1}>
        <Typography variant="subtitle1">{label}</Typography>
        <Switch checked={value} onChange={onChange} />
      </Stack>
    </Box>
  );
}

export default ToggleOption;
