import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modal.css';

const CustomModal = ({ show, handleClose, title, body }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{body}</p>
      </Modal.Body>

        <Button className="close" onClick={handleClose}>
          Close
        </Button>

    </Modal>
  );
};

export default CustomModal;
