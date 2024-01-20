import React, { useEffect , useState } from "react";
// import axios from "axios";
import NavbarSnippets from "./NavbarSnippets";
import Card from 'react-bootstrap/Card';

function MySnippets() {
    const [snippets, setSnippets] = useState([]);

    // get all the snippets from the database and render the result
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

    // if a snippet gets deleted and snippets collection changes the page renders again
    // useEffect(() => {getSnippets}, [snippets]);

    //  delete a single snippet and return the updated collection
    // const deleteSnippet = async (_id) => {
    //    const res = await axios.delete(`http://localhost:3020/snips/${_id}`);

    //    const updatedSnippets = [...snippets].filter((e) => {
    //     return e._id != _id;
    //    });

    //    setSnippets(updatedSnippets);

    // }

    return (

        <div>
            <NavbarSnippets />

            <div className="container mySnippets">

                <h3>My snippets</h3>

                <div className="d-flex gap-5">

                    <Card>
                        <Card.Header>
                       <img src={require('../images/trash.png')} className="img justify-content-end" alt={""} />
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
                            <img src={require('../images/trash.png')} className="img justify-content-end" alt={""} /> </Card.Header>
                        <Card.Body>
                            <Card.Title>Snippet Title</Card.Title>
                            <Card.Text>
                                Language
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <img src={require('../images/trash.png')} className="img justify-content-end" alt={""} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Snippet Title</Card.Title>
                            <Card.Text>
                                Language
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    {/* <div>
                {snippets.map((e) => {
                    return (
                        <Card>
                <Card.Header>
                   <img src={require('../images/trash.png')} className="img justify-content-end" alt={""} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                            {e.language}
                        </Card.Text>         
                    </Card.Body>
                </Card>
                    )}
                )}
            </div> */}

                </div>
            </div>
        </div>
    )
}

export default MySnippets;