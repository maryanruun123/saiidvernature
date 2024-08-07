import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/3.png"; // Ensure this path is correct and points to your logo image

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{ backgroundColor: "#ffffff" }} // Using a white background
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <img
            src={logo}
            alt="Saaed Ventures Logo"
            // style={{ maxHeight: "60px", width: "auto" }} // Ensures the logo is never taller than 60px but maintains the aspect ratio
            className="logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: "#323232" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" style={{ color: "#323232" }}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" style={{ color: "#323232" }}>
              Services
            </Nav.Link>
            <NavDropdown
              title={<span style={{ color: "#323232" }}>More Services</span>}
              id="services-dropdown"
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <NavDropdown.Item as={Link} to="/services/hospital">
                Hospital Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/education">
                Medical Education
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/insurance">
                Health Insurance
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/research-development"
              style={{ color: "#323232" }}
            >
              Research and Development
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/news-insights"
              style={{ color: "#323232" }}
            >
              News and Insights
            </Nav.Link>
            <Nav.Link as={Link} to="/careers" style={{ color: "#323232" }}>
              Careers
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "#323232" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
