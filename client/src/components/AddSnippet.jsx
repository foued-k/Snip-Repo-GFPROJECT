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

function AddSnippet() {
  const [snip, setSnip] = useState({
    title: "",
    description: "",
    language: "",
    body: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const languages = SyntaxHighlighter.supportedLanguages;

  const handleSnip = (e) => {
    const { name, value } = e.target;
    setSnip({ ...snip, [name]: value });
  };

const handleSubmit = async (e) => {
e.preventDefault()
setFormSubmitted(true)
const res = await axios.post('http://localhost:3020/snips', snip, {withCredentials:true})
console.log(res.data.msg);
}

  return (
    <div>
      <NavbarSnippets />

      <Container fluid className="preview">
        <Row>
          <Col lg={7}>
        {formSubmitted && (
            <div className="snippetPreview">
              <SyntaxHighlighter language="javascript" style={atomOneDark}>
                {snip.body}
              </SyntaxHighlighter>
            </div>) }
          </Col>
          <Col lg={4}>
            {!formSubmitted ? (
            <Form onSubmit={handleSubmit}>
            <div className="snippet-form">
              <FloatingLabel
                controlId="floatingInput"
                label="Snippet title"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="title"
                  name="title"
                  
                  onChange={handleSnip}
                /> 
              </FloatingLabel> 

              <FloatingLabel
                controlId="floatingInput"
                label="Snippet description"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="description"
                  name="description"
                  onChange={handleSnip}
                />
              </FloatingLabel>

              <Form.Select
                aria-label="Default select example"
                name="language"
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

              <div>
                <Form.Label className="add-code-title">
                  Add your code here
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter your code"
                  name="body"
                  onChange={handleSnip}
                />
              </div>

              <div className="form-btn">
                <Button className="logout-btn" onClick={handleSubmit} >Add snippet</Button>
              </div>
            </div>
              </Form>) : (
              <div className="snippet-form">
                <div>{snip.title}</div>
                <div>{snip.description}</div>
                <div>{snip.language}</div>
              </div>)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddSnippet;
