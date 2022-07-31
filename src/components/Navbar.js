import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import React from "react";

function TopNav() {
  let navigate = useNavigate();
  let userData = JSON.parse(localStorage.getItem("auth"));

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Navbar bg="light" expand="sm" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/dashboard">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className="username">{userData && userData.user_name}</div>
                <div onClick={logOut} className="logout">
                  logout
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;
