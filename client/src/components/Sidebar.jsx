import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
       <div className="sidebar col-12 pt-5 text-center">
              <ListGroup variant="flush" lg={3} className="sidebar-links">
                <ListGroupItem action variant="light">
                  <Link to={`/newsnippet`} className="links">
                    Add new snippet
                  </Link>
                </ListGroupItem>
                <ListGroupItem action variant="light">
                  <Link to={`/mysnippets`} className="links">
                    My snippets
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
    </>
  );
}

export default Sidebar;