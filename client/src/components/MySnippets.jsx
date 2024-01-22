import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarSnippets from "./NavbarSnippets";
import Card from 'react-bootstrap/Card';
import { useCookies } from "react-cookie";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MySnippets() {
    const [snippets, setSnippets] = useState([]);
    const [cookies] = useCookies(["token"]);
    const token = cookies.token;
    const [show, setShow] = useState(false);
    const [snipId, setSnipId] = useState("");
    
    const handleClose = () => setShow(false);
    
    // show delete confirmation box
    const handleDeleteAlert = (id) => {
        setSnipId(id);
        setShow(true);
    } 
    useEffect(() => {
        if (token) {
            getSnippets()
        } else {
            console.error("Token is missing");
            return;
        }
    }, []);

    // get all the snippets from the database and render the result
    function getSnippets() {
        try {
            axios.get("http://localhost:3020/snips", {
                withCredentials: true
            })
                .then(({ data }) => {
                    setSnippets(data.snips);
                    setSnipId("");
                })
        } catch (error) {
            console.log(error);
        }
    }

    //  delete a single snippet and return the updated collection
    const deleteSnippet = async (id) => {
        const res = await axios.delete(`http://localhost:3020/snips/${id}`, {
            withCredentials: true
        });
        getSnippets();
        setShow(false);
    }

    return (
        <div>
            <NavbarSnippets />

            <div className="container mySnippets">

                <h3>My snippets</h3>

                <div className="d-flex gap-5">

                    {snippets.map((e) => {
                        return (
                            <Card key={e._id}>
                                <Card.Header>
                                    <img src={require('../images/trash.png')} className="img justify-content-end" alt={""} onClick={() => handleDeleteAlert(e._id)}/>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{e.title}</Card.Title>
                                    <Card.Text>
                                        {e.language}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                    )}

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete a snip alert</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete this snip?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => deleteSnippet(snipId)}>
                                Yes
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                No
                            </Button>

                        </Modal.Footer>
                    </Modal>

                    <div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MySnippets;