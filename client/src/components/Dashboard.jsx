import { useEffect, useState } from "react";
import NavbarDashboard from "./NavbarDashboard";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import axios from "axios";
import SnipCard from "./SnipCard";

function Dashboard() {
  const [snippets, setSnippets] = useState([]);
  const [loggedUser, setLoggedUser] = useState();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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

  const captureSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const encodedSearchTerm = encodeURIComponent(search);
    const res = await axios.get(
      `http://localhost:3020/snips/search?term=${encodedSearchTerm}`,
      { withCredentials: true }
    );
    setSearchResults(res.data.snips);
  };

  return (
    <>
      <NavbarDashboard
        username={loggedUser}
        search={search}
        captureSearch={captureSearch}
        handleSearch={handleSearch}
      />
      <Container fluid>
        <Row>
          <Col className="sidebar-padding">
            {/* sidebar */}
            <div className="sidebar col-12 pt-5 text-center">
              <ListGroup variant="flush" lg={3} className="sidebar-links">
                <ListGroupItem action variant="light">
                  <Link to={`/newsnippet`} className="links">
                    Add new snippets
                  </Link>
                </ListGroupItem>
                <ListGroupItem action variant="light">
                  <Link to={`/mysnippets`} className="links">
                    My snippets
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg={9}>
            {/* rendering of the search results */}
            {searchResults.length !== 0 && (
              <div className="results">
                <h3 className="h3 results-title">Search results</h3>
                <div className="row">
                  {searchResults.map((e) => (
                    <SnipCard e={e} />
                  ))}
                </div>
              </div>
            )}
            {/* rendering of the latest snippets */}
            <div className="white-container">
              <h3 className="h3 container-title">My latest snippets</h3>
              <div className="row">
                {latestSnips.map((e) => {
                  return (
                    <SnipCard e={e}/>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
