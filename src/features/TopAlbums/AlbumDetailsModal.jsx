import React from "react";
import Modal from "react-bootstrap/Modal";
import { getMuricanDateFormat } from "../../utils/utils";

const AlbumDetailsModal = ({ info, show, close }) => {
  return (
    <Modal className="text-sm" show={show} onHide={() => close()}>
      <Modal.Header className="border-none pb-0">
        <Modal.Title>{info["im:name"].label}</Modal.Title>
        <button onClick={() => close()}>X</button>
      </Modal.Header>
      <Modal.Body>
        <picture className="drop-shadow-xl">
          <img
            className="h-60 w-60 rounded"
            meta={info["im:name"].label}
            src={info["im:image"][2].label}
          />
        </picture>
        <div className="mt-4">
          <div>
            <b>Title:</b> {info["title"].label}
          </div>
          <div>
            <b>Artist:</b> {info["im:artist"].label}
          </div>
          <div>
            <b>Item Count:</b> {info["im:itemCount"].label}
          </div>
          <div>
            <b>Price:</b> {info["im:price"].label}
          </div>
          <div>
            <b>Release Date:</b>{" "}
            {show && getMuricanDateFormat(info["im:releaseDate"].label)}
          </div>
          <div>
            <b>Rights:</b> {info["rights"].label}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export { AlbumDetailsModal };
