import React from "react";
import Modal from "react-bootstrap/Modal";

const AlbumDetailsModal = ({ info, show, close }) => {
  return (
    <Modal className="text-sm" show={show} onHide={() => close()}>
      <Modal.Header className="border-none pb-0">
        <Modal.Title>{info.albumName}</Modal.Title>
        <button onClick={() => close()}>X</button>
      </Modal.Header>
      <Modal.Body>
        <picture className="drop-shadow-xl">
          <img
            className="h-60 w-60 rounded"
            meta={info.albumName}
            src={info.imgSrc}
          />
        </picture>
        <div className="mt-4">
          <div>
            <b>Artist:</b> {info.artist}
          </div>
          <div>
            <b>Item Count:</b> {info.itemCount}
          </div>
          <div>
            <b>Price:</b> {info.price}
          </div>
          <div>
            <b>Release Date:</b> {info.releaseDate}
          </div>
          <div>
            <b>Rights:</b> {info.rights}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export { AlbumDetailsModal };
