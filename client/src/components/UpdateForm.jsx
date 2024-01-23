import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SyntaxHighlighter from "react-syntax-highlighter";

function UpdateForm({editedSnippet, handleUpdateSnippet, handleEditChange}) {
  
  const languages = SyntaxHighlighter.supportedLanguages;

  console.log(editedSnippet);

  return (
    <>
      <Form className="snippet-form">
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
              value={editedSnippet.title}
              className="snippet-inputs"
              onChange={handleEditChange}
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
              value={editedSnippet.description}
              onChange={handleEditChange}
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
              value={editedSnippet.language}
              onChange={handleEditChange}
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
              value={editedSnippet.body}
              onChange={handleEditChange}
              rows={7}
            />
          </Form.Group>
          <div className="form-btn">
            <Button
              className="logout-btn"
              onClick={(e) => {e.preventDefault()
                handleUpdateSnippet()}}
              type="submit"
            >
              Update snippet
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default UpdateForm;