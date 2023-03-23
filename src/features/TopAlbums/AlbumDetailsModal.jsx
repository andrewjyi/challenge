import React from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const Dt = styled.dt`
  display: inline-block;
  margin-right: 0.2rem;
`;
const Dd = styled.dd`
  display: inline-block;
`;

const AlbumDetailsModal = ({ info, show, close }) => {
  return (
    <Modal className="text-sm" show={show} onHide={close}>
      <Modal.Header className="border-none pb-0">
        <Modal.Title>{info.name}</Modal.Title>
        <button onClick={close}>X</button>
      </Modal.Header>
      <Modal.Body>
        <picture className="drop-shadow-xl center">
          <img className={info.imgClass} meta={info.name} src={info.imgSrc} />
        </picture>
        <dl className="mt-4">
          <div>
            <Dt>Artist:</Dt>
            <Dd>{info.artist}</Dd>
          </div>
          <div>
            <Dt>Item Count:</Dt>
            <Dd>{info.itemCount}</Dd>
          </div>
          <div>
            <Dt>Price:</Dt>
            <Dd>{info.price}</Dd>
          </div>
          <div>
            <Dt>Release Date:</Dt>
            <Dd>{info.releaseDate}</Dd>
          </div>
          <div>
            <Dt>Rights:</Dt>
            <Dd>{info.rights}</Dd>
          </div>
        </dl>
      </Modal.Body>
    </Modal>
  );
};

export { AlbumDetailsModal };
