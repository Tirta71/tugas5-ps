import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function MyNavbar() {
  const location = useLocation();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tugas Besar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Simulasi
            </Nav.Link>
            {/* <Nav.Link
              as={Link}
              to="/rng"
              className={location.pathname === "/rng" ? "active" : ""}
            >
              RNG
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
