import { Snackbar } from "@mui/material";
import { useState } from "react";
import Button from "../Button";

const EmailMeButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopy = async () => {
    try {
      const myEmail = "mackenzie.joyal@gmail.com";
      await navigator.clipboard.writeText(myEmail);

      handleClick();
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Copy failed. Try again.");
    }
  };
  return (
    <>
      <Button onClick={handleCopy}>Email me</Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            Email copied to clipboard!
          </span>
        }
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#A0C7FF",
            color: "#0A0A0C",
            fontSize: "1rem",
            fontWeight: "500",
            borderRadius: 0,
            border: "2px solid white",
          },
        }}
      />
    </>
  );
};

export default EmailMeButton;
