import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarSnippets from "./NavbarSnippets";
import Card from "react-bootstrap/Card";
import { useCookies } from "react-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SnippetsCard from "./SnippetsCard";
import { Alert, Col, Container, Row } from "react-bootstrap";

function MySnippets() {
  const [snippets, setSnippets] = useState([]);
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const [show, setShow] = useState(false);
  const [snipId, setSnipId] = useState("");

  console.log(snipId);

  const handleClose = () => setShow(false);

  // show delete confirmation box
  const handleDeleteAlert = (id) => {
    setSnipId(id);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  useEffect(() => {
    if (token) {
      getSnippets();
    } else {
      console.error("Token is missing");
      return;
    }
  }, []);

  // get all the snippets from the database and render the result
  function getSnippets() {
    try {
      axios
        .get("http://localhost:3020/snips", {
          withCredentials: true,
        })
        .then(({ data }) => {
          setSnippets(data.snips);
          setSnipId("");
        });
    } catch (error) {
      console.log(error);
    }
  }


  //  delete a single snippet and return the updated collection
  // const deleteSnippet = async (id) => {
  //   await axios.delete(`http://localhost:3020/snips/${id}`, {
  //     withCredentials: true,
  //   });
  //   getSnippets();
  //   setShow(false);
  // };

  return (
    <>
      <NavbarSnippets />
      <Container>
        <Row>
          {show && (
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
          )}
          {snippets.map((e) => (
            <Col key={e._id} lg={3} className="mt-5">
              <SnippetsCard
                e={e}
                getSnippets={getSnippets}
                handleDeleteAlert={handleDeleteAlert}
              />
              ;
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default MySnippets;
