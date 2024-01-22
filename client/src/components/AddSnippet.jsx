import React, { useState } from "react";
import NavbarSnippets from "./NavbarSnippets";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import axios from "axios";
import { Alert, Card, CardFooter, FormGroup } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

function AddSnippet() {
  const [snip, setSnip] = useState({
    title: "",
    description: "",
    language: "",
    body: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false)

  const languages = SyntaxHighlighter.supportedLanguages;

  const handleSnip = (e) => {
    const { name, value } = e.target;
    setSnip({ ...snip, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setSuccess(true);
    await axios.post("http://localhost:3020/snips", snip, {
      withCredentials: true,
    });
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const handleCopied = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

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
                  class="bi bi-check"
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
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                </svg>
              </Alert>
            )}
            {!formSubmitted ? (
              <Form className="snippet-form" onSubmit={handleSubmit}>
                <div>
                  <Form.Group className="mb-2">
                    <Form.Label className="text-light" htmlFor="title">
                      Title
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="title"
                      name="title"
                      id="title"
                      value={snip.title}
                      className="snippet-inputs"
                      onChange={handleSnip}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label className="text-light" htmlFor="description">
                      Description
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      id="description"
                      className="snippet-inputs"
                      value={snip.description}
                      onChange={handleSnip}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label className="text-light" htmlFor="description">
                      Language
                    </Form.Label>
                    <Form.Select
                      bg="dark"
                      aria-label="Default select example"
                      name="language"
                      className="snippet-inputs"
                      onChange={handleSnip}
                    >
                      <option>Choose a snippet language</option>
                      {languages.map((lang) => {
                        return (
                          <option key={lang} value={lang}>
                            {lang}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">
                      Enter your code
                    </Form.Label>
                    <Form.Control
                      className="snippet-inputs"
                      name="body"
                      type="text"
                      as="textarea"
                      value={snip.body}
                      onChange={handleSnip}
                      rows={7}
                    />
                  </Form.Group>
                  <div className="form-btn">
                    <Button className="logout-btn" onClick={handleSubmit}>
                      Add snippet
                    </Button>
                  </div>
                </div>
              </Form>
            ) : (
              <Card className="snippet mt-5" bg="dark" border="secondary">
                <Card.Header
                  style={{
                    backgroundColor: "#252a2e",
                    borderColor: "#454d55",
                  }}
                  as="h5"
                >
                  <Card.Text
                    style={{
                      color: "white",
                      fontStyle: "bold",
                      fontFamily: "Source Code Pro",
                    }}
                  >
                    &lt;/&gt;
                  </Card.Text>
                </Card.Header>

                <Card.Body>
                  <div className="snippet-icons">
                    <svg
                      onClick={() => console.log("clicked")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="white"
                      class="bi me-3 bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                    </svg>
                    <svg
                      onClick={() => console.log("clicked")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="white"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                    </svg>
                  </div>
                  <div className="snippet-overtitle">Title</div>
                  <Card.Text className="snippet-title">{snip.title}</Card.Text>
                  <div className="snippet-overtitle">Description</div>
                  <Card.Text className="snippet-description">
                    {snip.description}
                  </Card.Text>
                  <div className="snippet-overtitle mb-3">Language</div>
                  <Card.Text className="snippet-language">
                    &lt;{snip.language}&gt;
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddSnippet;
