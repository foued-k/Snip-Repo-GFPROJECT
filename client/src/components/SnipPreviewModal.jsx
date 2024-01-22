import React from 'react';
import { Button, Modal } from 'react-bootstrap';
// import "./ConfirmationalModal.css"

function SnipPreviewModal({ e, show, handleClose }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton >
                    <Modal.Title>{e.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                Clipboard goes here
                            </Col>
                            <Col xs={6} md={4}>
                                <p>{e.description}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                       Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SnipPreviewModal;