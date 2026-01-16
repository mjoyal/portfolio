import { useState } from "react";
import Button from "../Button";
import Toast from "../Toast";

interface IEmailMeButtonProps {
  isTextButton?: boolean;
  isShortText?: boolean;
  isSmall?: boolean;
}

const EmailMeButton = (props: IEmailMeButtonProps) => {
  const {
    isTextButton = false,
    isShortText = false,
    isSmall = false,
    ...rest
  } = props;
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
      <Button
        onClick={handleCopy}
        isTextButton={isTextButton}
        isSmall
        {...rest}
      >
        {isShortText ? "Email" : "Email me"}
      </Button>
      <Toast
        message="Email copied. Chat soon :)"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default EmailMeButton;
