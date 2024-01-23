import React from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
// import "./ConfirmationalModal.css"
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function SnipPreviewModal({ e, preview, handlePreview }) {
    const languages = SyntaxHighlighter.supportedLanguages;
    return (
        <>
            <Modal size="lg" show={preview} onHide={handlePreview} animation={false}>
                <Modal.Header closeButton >
                    <Modal.Title>{e.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={8} style={{
            position: "relative",
            paddingRight: 0,
          }}>
                                <CopyToClipboard
                  text={e.body}
                //   onCopy={(text) => handleCopied()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="white"
                    className="bi bi-clipboard clipboardIcon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                  </svg>
                </CopyToClipboard>
                <SyntaxHighlighter language="javascript" style={atomOneDark}>
                  {e.body}
                </SyntaxHighlighter>
                            </Col>
                            <Col xs={6} md={4}>
                                <p>{e.description}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlePreview}>
                       Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SnipPreviewModal;