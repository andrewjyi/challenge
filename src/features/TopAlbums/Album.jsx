import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Album = ({ info, index }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    handleShow();
  };

  return (
    <>
      <li onClick={() => handleClick}>
        <picture className="drop-shadow-xl">
          <img
            className="h-60 w-60 rounded"
            meta={info["im:name"].label}
            src={info["im:image"][2].label}
          />
        </picture>
        <div className="text-xs mt-2">
          <div className="font-semibold">{index}</div>
          <div className="font-light">{info["im:name"].label}</div>
          <div className="font-extralight">{info["im:artist"].label}</div>
        </div>
      </li>
    </>
  );
};

export default Album;