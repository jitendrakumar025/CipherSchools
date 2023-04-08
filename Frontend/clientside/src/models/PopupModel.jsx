import React from "react";
import { CloseOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  styled,
} from "@mui/material";

const useStyles = styled((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 style={{ margin: "0px", padding: "0px" }}>{title}</h4>
          <Button
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseOutlined />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <Box display="flex" justifyContent="flex-end" marginTop=".5rem">
        <Button variant="contained" color="primary"sx={{margin: ".5rem"}} onClick={() => {
              setOpenPopup(false);
            }} >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ color: "#f3912e", margin: ".5rem" }}
        >
          Save
        </Button>
      </Box>
    </Dialog>
  );
}
