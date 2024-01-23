import React, { useState } from "react";
import NavbarSnippets from "./NavbarSnippets";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AddForm from "./AddForm";
import SetSnippet from "./SetSnippet";
import UpdateForm from "./UpdateForm";

function AddSnippet() {
  const [snip, setSnip] = useState({
    title: "",
    description: "",
    language: "",
    body: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const languages = SyntaxHighlighter.supportedLanguages;

  const handleSnip = (e) => {
    const { name, value } = e.target;
    setSnip({ ...snip, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setSuccess(true);
    editMode
      ? await axios.put(`http://localhost:3020/snips/${snip._id}`, snip, {
          withCredentials: true,
        })
      : await axios.post("http://localhost:3020/snips", snip, {
          withCredentials: true,
        });
    setTimeout(() => {
      setSuccess(false);
      setEditMode(false);
    }, 2000);
  };

  const handleCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div>
      <NavbarSnippets />

      <Container fluid className="preview">
        <Row>
          <Col lg={7}>
            {formSubmitted && (
              <div className="snippetPreview">
                <CopyToClipboard
                  text={snip.body}
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
                  {snip.body}
                </SyntaxHighlighter>
              </div>
            )}
          </Col>
          <Col lg={4}>
            {success && (
              <Alert variant="success" className="mt-3 success">
                Snippet created!
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
            {!formSubmitted && !editMode ? (
  <AddForm
    snip={snip}
    languages={languages}
    handleSubmit={handleSubmit}
    handleSnip={handleSnip}
  />
) : (
  <>{!editMode ? <SetSnippet snip={snip} handleEdit={handleEdit} /> : <UpdateForm editedSnippet={snip} handleEditChange={handleSnip} handleUpdateSnippet={handleSubmit} editMode={editMode}/>}</>
)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddSnippet;
