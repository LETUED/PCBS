import React from 'react';
import Box from '@mui/material/Box';

const itemStyle = {
  border: 1,
  padding: 2,
  margin: 1
};

function Item(props) {
  return <Box sx={itemStyle}>{props.children}</Box>;
}

export default Item;
