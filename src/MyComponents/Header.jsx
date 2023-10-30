import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const Header = (props) => {
  const { title } = props;

  const headerStyle = {
    backgroundColor: "silver",
    color: "#333",
    padding: "15px",
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };

  const navLinkStyle = {
    fontSize: "20px",
    textDecoration: "none",
    color: "#333",
    transition: "color 0.3s",
    marginLeft: "4.5em",
    marginRight: "2em",
  };

  const logoStyle = {
    fontSize: "25px",
    marginLeft: "1.5em",
    marginRight: "14.25em",
  };

  const onNavLinkHover = (e) => {
    e.target.style.color = "purple";
  };

  const onNavLinkLeave = (e) => {
    e.target.style.color = "#333";
  };

  return (
    <Navbar expand="lg" style={headerStyle}>
      <Container>
        <Navbar.Brand to="/" style={logoStyle}>
        <img width="31" height="31" src="https://img.icons8.com/fluency/48/sticky-notes.png" alt="sticky-notes"/>{title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <a
              style={navLinkStyle}
              href="/"
              onMouseOver={onNavLinkHover}
              onMouseLeave={onNavLinkLeave}
            >
              Home
            </a>
            <a
              style={navLinkStyle}
              href="/about"
              onMouseOver={onNavLinkHover}
              onMouseLeave={onNavLinkLeave}
            >
              About
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;