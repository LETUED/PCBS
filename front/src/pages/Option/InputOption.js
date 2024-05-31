import React from "react";
import { Box, TextField, Typography } from "@mui/material";

function InputOption({ label, value, onChange, minmax }) {
  return (
    <Box sx={{ borderBottom: '1px solid lightgray', py: 2 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>{label}</Typography>
      <TextField
        fullWidth
        label={minmax}
        variant="outlined"
        value={value}
        onChange={onChange}
        type="number"
      />
    </Box>
  );
}

export default InputOption;
