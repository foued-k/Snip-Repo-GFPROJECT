import { Card, CardFooter, Col } from "react-bootstrap";
import React from 'react';

function SnipCard({e}) {
  return (
      <Col lg={3} key={e._id}>
<Card
className="text-left card"
bg="dark"
border="secondary"
>
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
  <Card.Text className="card-title">
    {e.title}
  </Card.Text>
  <Card.Text className="card-description">
    {e.description}
  </Card.Text>
  <Card.Text className="card-language">
    &lt;{e.language}&gt;
  </Card.Text>
</Card.Body>
<CardFooter>
<Card.Link className="text-center" style={{display:"flex", justifyContent:"flex-end", cursor:"pointer"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-eye-fill" viewBox="0 0 16 16">
<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg>
</Card.Link>
</CardFooter>
</Card>
</Col>
  );
}

export default SnipCard;

