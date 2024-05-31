import React from "react";
import { Box, Slider, Typography } from "@mui/material";

function SliderOption({ label, value, onChange }) {
  return (
    <Box sx={{ borderBottom: '1px solid lightgray', py: 2 }}>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        min={0}
        max={100}
        marks
      />
      <Typography variant="caption" display="block" gutterBottom>
        현재 값: {value}%
      </Typography>
    </Box>
  );
}

export default SliderOption;
