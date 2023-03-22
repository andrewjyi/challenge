import React from "react";
import Modal from "react-bootstrap/Modal";

const AlbumDetailsModal = ({ info, show, close }) => {
  return (
    <Modal className="text-sm" show={show} onHide={() => close()}>
      <Modal.Header className="border-none pb-0">
        <Modal.Title>{info.name}</Modal.Title>
        <button onClick={() => close()}>X</button>
      </Modal.Header>
      <Modal.Body>
        <picture className="drop-shadow-xl center">
          <img className={info.imgClass} meta={info.name} src={info.imgSrc} />
        </picture>
        <dl className="mt-4">
          <dt>
            <b>Artist:</b> <dd>{info.artist}</dd>
          </dt>
          <dt>
            <b>Item Count:</b> <dd>{info.itemCount}</dd>
          </dt>
          <dt>
            <b>Price:</b> <dd>{info.price}</dd>
          </dt>
          <dt>
            <b>Release Date:</b> <dd>{info.releaseDate}</dd>
          </dt>
          <dt>
            <b>Rights:</b> <dd>{info.rights}</dd>
          </dt>
        </dl>
      </Modal.Body>
    </Modal>
  );
};

export { AlbumDetailsModal };
