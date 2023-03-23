import { AlbumDetailsModal } from "./AlbumDetailsModal";
import React, { useState } from "react";
import styled from "styled-components";

const Li = styled.li`
  animation: fadeIn 0.6s;
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
      <Li onClick={() => handleShow()}>
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
      </Li>
      <>
        <AlbumDetailsModal
          info={info}
          show={show}
          close={() => handleClose()}
        />
      </>
    </>
  );
};

export { Album };
