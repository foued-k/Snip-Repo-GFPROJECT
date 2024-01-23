import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Col, Container, Modal, Row } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import UpdateForm from "./UpdateForm";
import ConfirmationModal from "./ConfirmationModal";

function SnipPreviewModal({ e, preview, handlePreview}) {
  const [show, setShow] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [edit, setEdit] = useState(false);
  const [copied, setCopied] = useState(false);
  const [editedSnippet, setEditedSnippet] = useState({
    title: e.title,
    body: e.body,
    description: e.description,
    language: e.language,
    _id: e._id
  });

  const languages = SyntaxHighlighter.supportedLanguages;

  const handleClose = () => setShowConfirmation(false);

  const deleteSnippet = async (id) => {
    const res = await axios.delete(`http://localhost:3020/snips/${id}`, {
      withCredentials: true,
    });
    setShow(true);
    console.log(res);
    setShowConfirmation(false);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedSnippet((prevSnippet) => ({
      ...prevSnippet,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  const handleUpdateSnippet = async () => {
    const res = await axios.put(
      `http://localhost:3020/snips/${editedSnippet._id}`,
      editedSnippet,
      { withCredentials: true }
    );
    console.log(res);
    setEditedSnippet({
      title: e.title,
      body: e.body,
      description: e.description,
      language: e.language,
    });
    setEdit(false);
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  };

  const handleCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };



  return (
    <>
      {showConfirmation && (
        <ConfirmationModal
          e={e}
          show={showConfirmation}
          handleClose={handleClose}
          deleteSnippet={deleteSnippet}
        />
      )}
      {show && (
        <Modal
          size="lg"
          show={preview}
          onHide={handlePreview}
          animation={false}
          p="3"
        >
          <Alert variant="success" className="mt-3 success">
            Deleted successfully!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              class="bi bi-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
            </svg>
          </Alert>
        </Modal>
      )}
      {!show && (
        <Modal
          size="lg"
          show={preview}
          onHide={handlePreview}
          animation={false}
        >
         {!edit && <Modal.Header closeButton>
            <Modal.Title>{e.title}</Modal.Title>
          </Modal.Header>}
          <Modal.Body>
          {copied && (
              <Alert variant="success" className="mt-3 success">
                Snippet copied!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                </svg>
              </Alert>
            )}
            <Container>
              <Row>
                <div className="snippet-icons mb-3">
                  <svg
                    onClick={() => handleEdit(e)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    className="bi me-3 bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                  </svg>
                  <svg
                    onClick={() => setShowConfirmation(true)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    className="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                  </svg>
                </div>
              </Row>
              {edit && (
                <UpdateForm editedSnippet={editedSnippet} handleUpdateSnippet={handleUpdateSnippet} handleEditChange={handleEditChange}/>
              )}
              {!edit && (
                <Row>
                  <Col
                    xs={12}
                    md={8}
                    style={{
                      width: "auto",
                      minWidth: "450px",
                      position: "relative",
                      paddingRight: 0,
                      overflowY: "auto",
                      overflowX: "auto",
                      maxHeight: "600px",
                      wordWrap: "break-word",
                    }}
                  >
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

                    <SyntaxHighlighter
                      language="javascript"
                      style={atomOneDark}
                    >
                      {e.body}
                    </SyntaxHighlighter>
                  </Col>
                  <Col xs={6} md={4}>
                    <p style={{ wordWrap: "break-word" }}>{e.description}</p>
                  </Col>
                </Row>
              )}
            </Container>
          </Modal.Body>
         {!edit && <Modal.Footer
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p style={{ color: "#FF725E" }}>&lt;{e.language}&gt;</p>
            <Button variant="secondary" onClick={handlePreview}>
              Close
            </Button>
          </Modal.Footer>}
        </Modal>
      )}
    </>
  );
}

export default SnipPreviewModal;
