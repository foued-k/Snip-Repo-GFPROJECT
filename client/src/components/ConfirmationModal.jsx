import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./ConfirmationalModal.css"

function ConfirmationModal({e, show, handleClose, deleteSnippet}) {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton >
            <Modal.Title>Delete a snip alert</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this snip?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" style={{backgroundColor: "#FF725E"}} onClick={() => deleteSnippet(e._id)}>
              Yes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

export default ConfirmationModal;