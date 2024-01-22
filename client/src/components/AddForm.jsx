import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function AddForm({snip, handleSubmit, handleSnip, languages}) {
  return (
    <>
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
                    <Button className="logout-btn" type="button" onClick={handleSubmit}>
                       Add snippet
                    </Button>
                  </div>
                </div>
              </Form>
    </>
  );
}

export default AddForm;