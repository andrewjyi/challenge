import { AlbumDetailsModal } from "./AlbumDetailsModal";
import React, { useState } from "react";

const Album = ({ info }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <li onClick={() => handleShow()}>
        <picture className="drop-shadow-xl center">
          <img
            className={info.imgClass}
            meta={info.imgMeta}
            src={info.imgSrc}
          />
        </picture>
        <div className="text-xs mt-2 text-center">
          <div className="font-light">{info.albumName}</div>
          <div className="font-extralight">{info.artist}</div>
        </div>
      </li>
      <AlbumDetailsModal info={info} show={show} close={() => handleClose()} />
    </>
  );
};

export default Album;
