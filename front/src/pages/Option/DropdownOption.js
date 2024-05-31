import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function DropDownOption({ label, value, onChange, options, labelId, id }) {
    return (
        <FormControl fullWidth>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                labelId={labelId}
                id={id}
                value={value}
                label={label}
                onChange={onChange}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default DropDownOption;
