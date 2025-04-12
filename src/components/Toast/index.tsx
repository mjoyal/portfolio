import { Snackbar } from "@mui/material";

import { observer } from "mobx-react";

interface IToastProps {
  message: string;
  isOpen: boolean;
  handleClose: () => void;
}
const Toast = (props: IToastProps) => {
  const { message, isOpen, handleClose } = props;

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      message={
        <span
          style={{
            gap: "8px",
            color: "#0A0A0C",
            fontSize: "1.25rem",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {message}
        </span>
      }
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      sx={{
        "& .MuiSnackbarContent-root": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D9D9D9",
          color: "#0A0A0C",
          fontSize: "1rem",
          fontWeight: "500",
          borderRadius: 0,
          border: "4px solid #A0C7FF",
        },
      }}
    />
  );
};

export default observer(Toast);
