import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function DateSelector({ label, onChange }) {
    const [state, setState] = useState([
        {
            startDate: addDays(new Date(), -7),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleSelect = (ranges) => {
        setState([ranges.selection]);
        onChange(ranges.selection);
    };

    return (
        <Box sx={{ borderBottom: '1px solid lightgray', py: 2 }}>
            <Typography variant="h7" gutterBottom>
                {label}
            </Typography>
            <DateRangePicker
                ranges={state}
                onChange={handleSelect}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}

                style={{ width: '100%' }} // 달력의 너비를 100%로 설정
            />
        </Box>
    );
}

export default DateSelector;
