import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        color: "#333333",
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.15)", // Added shadow for visual separation
        zIndex: 10, // Ensures the footer stays above other elements
      }}
      className="text-center text-lg-start mt-5"
    >
      <Container className="p-4">
        <Row>
          <Col md="3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-dark">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-dark">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col md="3">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
          <Col md="3">
            <h5 className="text-uppercase">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/privacy-policy" className="text-dark">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-dark">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
