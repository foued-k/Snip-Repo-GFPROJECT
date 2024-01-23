import axios from "axios";
import { useState } from "react";
import { Card, CardFooter } from "react-bootstrap";
import ConfirmationModal from "./ConfirmationModal";
import SnipPreviewModal from "./SnipPreviewModal";

function SnippetsCard({ e, getSnippets, handleDeleteAlert }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [preview, setPreview] = useState(false);
  const handlePreview = () => setPreview(false);

const deleteSnippet = async(id) => {
await axios.delete(`http://localhost:3020/snips/${id}`, {withCredentials:true})
console.log('deleted');
getSnippets()
handleClose()
handleDeleteAlert()
}


  return (
    <>
    {show && (<ConfirmationModal e={e} show={show} handleClose={handleClose} deleteSnippet={deleteSnippet}/>)} 
    {preview && (<SnipPreviewModal e={e} preview={preview} handlePreview={handlePreview}/>)}
    <Card className="text-left card" bg="dark" border="secondary">
      <Card.Header
        style={{
          backgroundColor: "#252a2e",
          borderColor: "#454d55",
        }}
        as="h5"
        className="text-center"
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
        <Card.Text className="card-title">{e.title}</Card.Text>
        <Card.Text className="card-description">
          {e.description.length > 90
            ? e.description.substring(0, 90) + "..."
            : e.description}
        </Card.Text>
        <Card.Text className="card-language">&lt;{e.language}&gt;</Card.Text>
      </Card.Body>
      <CardFooter>
        <Card.Link
          className="text-center"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
        >
          <div>
            <svg
            onClick={() => setPreview(true)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi me-3 bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
            </svg>
            <svg
             onClick={() => setShow(true)}
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
        </Card.Link>
      </CardFooter>
    </Card>
    </>
  );
}

export default SnippetsCard;
