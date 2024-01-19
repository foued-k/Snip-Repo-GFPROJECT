import React from "react";
import axios from "axios";
// import { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MySnippets() {
    // const [snippets, setSnippets] = useState([]);

    // function getSnippets() {
    //     try {
    //         console.log("weight requested front")
    //         axios.get("http://localhost:3020/snippets")
    //             .then(({ data }) => {
    //                 setSnippets(data);
    //                 console.log(snippets);
    //             })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div className="container mySnippets">

            <h3>My snippets</h3>

            <div className="d-flex gap-5">

                <Card>
                    <Card.Header>
                    <img src={require('../images/trash.png')} className="img justify-content-end" alt={""}/>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Snippet Title</Card.Title>
                        <Card.Text>
                            Language
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                <Card.Header>
                    <img src={require('../images/trash.png')} className="img justify-content-end" alt={""}/> </Card.Header>
                    <Card.Body>
                        <Card.Title>Snippet Title</Card.Title>
                        <Card.Text>
                            Language
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>

                <Card>
                <Card.Header>
                    <img src={require('../images/trash.png')} className="img justify-content-end" alt={""}/> </Card.Header>
                    <Card.Body>
                        <Card.Title>Snippet Title</Card.Title>
                        <Card.Text>
                            Language
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>



                {/* <div>
                {snippets.map((e) => {
                    return (
                        <div >
                            <h3>{e.title}</h3>
                            <p>{e.description}</p>
                            <p>{e.language}</p>
                        </div>
                    )}
                )}
            </div> */}

            </div>
        </div>
    )
}

export default MySnippets;