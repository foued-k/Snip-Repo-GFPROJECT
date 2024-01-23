import { useEffect, useState } from "react";
import NavbarDashboard from "./NavbarDashboard";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { Alert, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import axios from "axios";
import SnipCard from "./SnipCard";
import ResultSnipCard from "./ResultSnipCard";
import Sidebar from "./Sidebar";

function Dashboard() {
  const [snippets, setSnippets] = useState([]);
  const [loggedUser, setLoggedUser] = useState();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [warn, setWarn] = useState(false);
  const [show, setShow] = useState(false);
  const allSnipsReversed = [...snippets].reverse();
  let latestSnips = allSnipsReversed.slice(0, 4);

  // if ([snippets].length > 4) {
  //   latestSnips = [...snippets]
  //     .slice([...snippets].length - 4, [...snippets].length)
  //     .reverse();
  // } else {
  //   latestSnips = [...snippets].reverse();
  // }
  
  useEffect(() => {
    fetchData();
  }, []);

  // fetching all the user's snippets from the db
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
        if (search !== "") {
          handleReSearch();
        }
      }
    } catch (error) {
      console.error("Error fetching snippets:", error);
    }
  }

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
    setWarn(false);
    setSearch(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "" && searchResults.length === 0) {
      setWarn(true);
      return;
    }
    const encodedSearchTerm = encodeURIComponent(search);
    const res = await axios.get(
      `http://localhost:3020/snips/search?term=${encodedSearchTerm}`,
      { withCredentials: true }
    );
    setSearchResults(res.data.snips);
  };

  const showAlert = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const handleReSearch = async () => {
    if (search === "" && searchResults.length === 0) {
      setWarn(true);
      return;
    }
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
            <Sidebar />
          </Col>
          <Col lg={9}>
            {/* rendering of the search results */}
            {searchResults.length !== 0 && (
              <div className="results">
                <h3 className="h3 results-title">Search results</h3>
                <div className="row">
                  {searchResults.map((e) => (
                    <Col lg={3} key={e._id}>
                      <ResultSnipCard
                        e={e}
                        fetchData={fetchData}
                        showAlert={showAlert}
                        handleReSearch={handleReSearch}
                      />
                    </Col>
                  ))}
                </div>
              </div>
            )}
            {warn && (
              <div className="results">
                <h3 className="h3 results-title">Search results</h3>
                <div className="row search-warning">
                  Please enter a search term
                </div>
              </div>
            )}
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
            {/* rendering of the latest snippets */}
            <div className="white-container">
              <h3 className="h3 container-title">My latest snippets</h3>
              <div className="row">
                {latestSnips.map((e) => {
                  return (
                    <Col lg={3} key={e._id}>
                      <SnipCard
                        e={e}
                        fetchData={fetchData}
                        showAlert={showAlert}
                      />
                    </Col>
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
