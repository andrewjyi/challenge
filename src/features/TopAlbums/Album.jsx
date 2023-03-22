import { AlbumDetailsModal } from "./AlbumDetailsModal";
import React, { useState } from "react";
import styled from "styled-components";

const Item = styled.li`
  &:hover {
    cursor: pointer;
  }
`;

const Album = ({ info }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Item onClick={() => handleShow()}>
        <picture className="drop-shadow-xl center">
          <img
            className={info.imgClass}
            meta={info.imgMeta}
            src={info.imgSrc}
          />
        </picture>
        <div className="text-xs mt-2 text-center">
          <div className="font-light">{info.name}</div>
          <div className="font-extralight">{info.artist}</div>
        </div>
      </Item>
      <AlbumDetailsModal info={info} show={show} close={() => handleClose()} />
    </>
  );
};

export default Album;
