import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="py-5" fluid>
      <Row className="justify-content-center">
        <Col xl={10}>
          <Card className="shadow-lg p-4">
            <h2
              className="text-center mb-5"
              style={{ fontSize: "34px", fontWeight: "bold", color: "#0056b3" }}
            >
              Contact Us
            </h2>

            {/* Contact Details Section */}
            <Row>
              <Col lg={6} className="mb-4">
                <h3 style={{ fontSize: "28px", fontWeight: "bold" }}>
                  Contact Details
                </h3>
                <div style={{ fontSize: "22px" }}>
                  <p>
                    <strong>Main Office:</strong>
                    <br />
                    Phone: +1 (555) 123-4567
                    <br />
                    Email: info@saaedventures.com
                    <br />
                    Address: 123 Venture Blvd, Nairobi, Kenya
                  </p>
                  <p>
                    <strong>Support:</strong>
                    <br />
                    Phone: +1 (555) 654-3210
                    <br />
                    Email: support@saaedventures.com
                  </p>
                  <p>
                    <strong>Sales:</strong>
                    <br />
                    Phone: +1 (555) 789-0123
                    <br />
                    Email: sales@saaedventures.com
                  </p>
                  <p>
                    <strong>Technical:</strong>
                    <br />
                    Phone: +1 (555) 987-6543
                    <br />
                    Email: tech@saaedventures.com
                  </p>
                </div>
              </Col>
              <Col lg={6} className="mb-4">
                <h3 style={{ fontSize: "28px", fontWeight: "bold" }}>
                  Our Location
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8969294042367!2d-122.4194154846813!3d37.77492977975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2f1f6e2f13%3A0x7b77e7f3b1f1c90f!2sSaaed%20Ventures%20Limited!5e0!3m2!1sen!2ske!4v1618299932121"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Saaed Ventures Location"
                ></iframe>
              </Col>
            </Row>

            {/* Feedback Form */}
            <h3
              className="mb-5"
              style={{ fontSize: "28px", fontWeight: "bold" }}
            >
              Send us a message
            </h3>
            <Form>
              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label style={{ fontSize: "24px" }}>
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      style={{ fontSize: "22px" }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label style={{ fontSize: "24px" }}>
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      style={{ fontSize: "22px" }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label style={{ fontSize: "24px" }}>
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={{ fontSize: "22px" }}
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label style={{ fontSize: "24px" }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={{ fontSize: "22px" }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ fontSize: "24px", padding: "15px 30px" }}
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
