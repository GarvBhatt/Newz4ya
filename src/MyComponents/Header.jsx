import React, { useState } from "react";
import { Container, Dropdown, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [showDropdown, setshowDropdown] = useState(false);
  const categories = ["General", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];
  const { title } = props;

  const headerStyle = {
    backgroundColor: "rgb(210 210 210)",
    color: "#333",
    padding: "7px",
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
    fontSize: "21px",
    textDecoration: "none",
    color: "#333",
    transition: "color 0.3s",
    marginRight: "5.5em",
  };

  const logoStyle = {
    fontSize: "25px",
    marginRight: "14.25em",
  };

  const onNavLinkHover = (e) => {
    e.target.style.color = "purple";
  };

  const onNavLinkLeave = (e) => {
    e.target.style.color = "#333";
  };

  return (
    <Navbar className="fixed-top" expand="lg" style={headerStyle}>
      <Container>
        <Navbar.Brand to="/" style={logoStyle}>
        <img width="41" height="41" src="https://img.icons8.com/parakeet/48/news.png" alt="news"/>{title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              style={navLinkStyle}
              to="/Newz4ya/"
              onMouseOver={onNavLinkHover}
              onMouseLeave={onNavLinkLeave}
            >
              Home
            </Link>
            <Link
              style={navLinkStyle}
              to="/about"
              onMouseOver={onNavLinkHover}
              onMouseLeave={onNavLinkLeave}
            >
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Dropdown show={showDropdown} onMouseEnter={() => setshowDropdown(true)} onMouseLeave={() => setshowDropdown(false)}>
          <Dropdown.Toggle style={{fontSize:"19px",marginTop:"-11px"}} variant="success" id="dropdown-basic">
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu className="m-0">
            {
              categories.map((e)=>
              {
                return (
                  <Dropdown.Item
                    key={e}
                    style={{
                      fontFamily: "Monospace",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "silver";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "initial";
                    }}
                    onClick={() => {
                      props.setq(e);
                    }}
                  >
                    {e}
                  </Dropdown.Item>
                );
              })
            }
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;