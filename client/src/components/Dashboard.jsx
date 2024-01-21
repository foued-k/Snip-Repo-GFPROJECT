import { useEffect, useState } from "react";
import NavbarDashboard from "./NavbarDashboard";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { Button, ButtonGroup, Card, CardBody, Col, Row } from "react-bootstrap";
import axios from "axios";

function Dashboard() {
  const [snippets, setSnippets] = useState([]);
  const [loggedUser, setLoggedUser] = useState();
  let latestSnips;

  if ([snippets].length > 4) {
    latestSnips = [...snippets]
      .slice([...snippets].length - 4, [...snippets].length)
      .reverse();
  } else {
    latestSnips = [...snippets].reverse();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3020/snips", {
          withCredentials: true,
        });
        if (response.data.snips && response.data.snips.length > 0) {
          const user = response.data.snips[0].user;
          setSnippets(response.data.snips);

          if (user) {
            getUser(user);
          }
        }
      } catch (error) {
        console.error("Error fetching snippets:", error);
      }
    }

    fetchData();
  }, []);

  const getUser = async (userId) => {
    try {
      const userResponse = await axios.get(
        `http://localhost:3020/user/${userId}`
      );
      setLoggedUser(userResponse.data.user.username);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavbarDashboard username={loggedUser} />
      <div className="dashboard">
        <div className="row">
          <div className="col-3 dashboard-menu">
            <ButtonGroup vertical className="full-width" gap={2}>
              <Button variant="light" size="lg">
                <Link to={`/newsnippet`} className="links">
                  Add new snippets
                </Link>
              </Button>
              <Button variant="light" size="lg">
                <Link to={`/mysnippets`} className="links">
                  My snippets
                </Link>
              </Button>
            </ButtonGroup>
          </div>
          {/* rendering of the latest snippets */}
          <div className="row col-9">
            <Container className="latest">
              <h3 className="h3">My latest snippets</h3>
              <Row lg={4}>
                {latestSnips.map((e) => {
                  return (
                    <Col key={e._id}>
                      <Card bg="dark" border="light">
                        <CardBody>
                          <Card.Title>{e.title}</Card.Title>
                          <Card.Text className="description">
                            {e.description}
                          </Card.Text>
                          <Card.Text>{e.language}</Card.Text>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
