import React, { useEffect } from "react";
import successfulIcon from "../images/Union.svg";
import unSuccessfulIcon from "../images/Unsuccessful.svg";
import Popup from "./Popup";
const InfoTooltip = ({ isOpen, onClose, type }) => {
  const success = type === "successful";

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <Popup isOpen={isOpen} name="tooltip" onClose={onClose}>
      <img
        src={success ? successfulIcon : unSuccessfulIcon}
        className="tooltip__image"
        alt={`${success ? "successful" : "unsuccessful"} attempt`}
      />
      <h2 className="tooltip__text">
        {success
          ? "Success! You have now been registered."
          : "Oops, something went wrong! Please try again."}
      </h2>
    </Popup>
  );
};

export default InfoTooltip;
