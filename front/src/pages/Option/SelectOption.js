import React from "react";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";

function SelectOption({ label, options, value, onChange }) {
  return (
    <Box sx={{ borderBottom: '1px solid lightgray', py: 2 }}>
      <FormControl component="fieldset">
        <FormLabel component="legend"><Typography variant="subtitle1">{label}</Typography></FormLabel>
        <RadioGroup
          aria-label="options"
          name="options"
          value={value}
          onChange={onChange}
          row  // 가로로 나열
        >
          {options.map(option => (
            <FormControlLabel key={option.value} value={option.value} control={<Radio />}
              label={option.label} />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default SelectOption;
