import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const ConsentDialog = ({ open, onClose, onAgree }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{"동의서"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          동의서 내용
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAgree} color="primary">
          동의함
        </Button>
        <Button onClick={onClose} color="primary" autoFocus>
          동의하지 않음
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConsentDialog;
