import { useState } from "react";
import Button from "../Button";
import Toast from "../Toast";

interface IEmailMeButtonProps {
  isTextButton?: boolean;
}
const EmailMeButton = (props: IEmailMeButtonProps) => {
  const { isTextButton = false } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = async () => {
    try {
      const myEmail = "mackenzie.joyal@gmail.com";
      await navigator.clipboard.writeText(myEmail);

      setIsOpen(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Copy failed. Try again.");
    }
  };
  return (
    <>
      <Button onClick={handleCopy} isTextButton={isTextButton}>
        Email me
      </Button>
      <Toast
        message="Email copied to clipboard"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default EmailMeButton;
