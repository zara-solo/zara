import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './sidebar';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="transparent" expand="lg" variant="light" className="navbares" fixed="top">
        <Sidebar  />
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"
              style={{ marginLeft: "100px", width: "200px", height: "90px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link
                href="/"
                style={{
                  color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "15px",
                  marginLeft: "50px",
                }}
              >
                
              </Nav.Link>
            </Nav>

            <div>
              <Nav.Link
                href="/search"
                style={{
                  fontFamily: "Sans-serif",
                  fontSize: "20px",
                  marginRight: "60px",
                  textDecoration: "underline",
                }}
              >
                Search
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
