import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function MyNavbar(props) {
  const navlinkslist = props.mylinks;
  const homeLinkList = props.homeLink;

  const allLinks = navlinkslist.map((item) => (
    <Nav.Link
      as={NavLink}
      className="d-inline p-2 "
      key={item.lnombre} // para que me saque el warning pedorro que tira de key
      to={item.to}
    >
      {item.lnombre}
    </Nav.Link>
  ));

  const homeLink = homeLinkList.map((item) => (
    <Nav.Link
      as={NavLink}
      className="d-inline p-2 text-white"
      key={item.tipo} // para que me saque el warning pedorro que tira de key
      to={item.to}
    >
      {item.tipo}
    </Nav.Link>
  ));

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#" className="text-danger">
          <b>MAXELEC</b>
        </Navbar.Brand>
        {homeLink}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {allLinks}
            <Nav.Link as={NavLink} className="d-inline p-2 text-danger" to="/">
              Salir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </>
  );
}

export default MyNavbar;
