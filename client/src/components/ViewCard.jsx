import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from 'react';


function ViewCard({e, show, handleClose}) {
    const [copied, setCopied] = useState(false)

    const handleCopied = () => {
        setCopied(true)
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }

  return (
      <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{e.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Container>
                <Row>
                    <Col>
                    <div className="snippetPreview">
                <CopyToClipboard
                  text={e.body}
                  onCopy={(text) => handleCopied()}
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
              </div>
                    </Col>
                    <Col>
                    {e.description}
          {e.language}
                    </Col>
                </Row>
            </Container>
          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default ViewCard;