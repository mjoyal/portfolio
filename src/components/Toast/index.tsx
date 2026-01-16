import { Snackbar } from "@mui/material";

import { observer } from "mobx-react";

interface IToastProps {
  message: string;
  isOpen: boolean;
  handleClose: () => void;
  verticalOrigin?: "top" | "bottom";
}
const Toast = (props: IToastProps) => {
  const { message, isOpen, handleClose, verticalOrigin = "bottom" } = props;

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={4000}
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
      anchorOrigin={{ vertical: verticalOrigin, horizontal: "right" }}
      sx={{
        "& .MuiSnackbarContent-root": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#A0C7FF",
          color: "#0A0A0C",
          fontSize: "1rem",
          fontWeight: "500",
          borderRadius: "8px",
          padding: "12px 20px",
          margin: "24px",
          marginTop: "40px",
          boxShadow: "none",
        },
      }}
    />
  );
};

export default observer(Toast);
