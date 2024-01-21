import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarSnippets from "./NavbarSnippets";
import Card from 'react-bootstrap/Card';
import { useCookies } from "react-cookie";

function MySnippets() {
    const [snippets, setSnippets] = useState([]);
    const [cookies] = useCookies(["token"]);
    const token = cookies.token;

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
                                    <img src={require('../images/trash.png')} className="img justify-content-end" alt={""} onClick={() => deleteSnippet(e._id)} />
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

                    <div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MySnippets;