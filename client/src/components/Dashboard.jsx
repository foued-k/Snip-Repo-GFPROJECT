import { useEffect, useState } from "react";
// import axios from "axios";
import NavbarDashboard from "./NavbarDashboard";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";
import { useCookies } from "react-cookie";

function Dashboard() {
  const [snippets, setSnippets] = useState([]);
  const location = useLocation();
  const [cookies] = useCookies(["token"]);
  const { username } = location.state
  const [user] = useCookies(["user"])
  const token = JSON.stringify(cookies.token);
  console.log(document.cookie.token)

  console.log(token)
  function getSnippets() {
    try {
      axios.get("http://localhost:3020/snips", {
        withCredentials: true
      })
        .then(({ data }) => {
          setSnippets(data.snips);
          console.log(data.snips);
        })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSnippets();
  }, []);


  return (
    <div>
      <NavbarDashboard username={username} />

      <div className="container dashboard">
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
          <div className="col">
            <div className="latestSnippets">
              <h4>My latest snippets</h4>
              <div className="d-flex gap-5">
                {snippets.map((e) => {
                  return (
                    <div key={e._id}>
                      <h3>{e.title}</h3>
                      <p>{e.description}</p>
                      <p>{e.language}</p>
                    </div>
                  )
                }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
