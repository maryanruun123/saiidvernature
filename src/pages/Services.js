// src/pages/Services.js

import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="py-5">
      {/* Overview Section */}
      <Row className="mb-5">
        <Col>
          <h2
            className="text-center mb-4"
            style={{ fontSize: "3rem", fontWeight: "bold" }}
          >
            Our Services
          </h2>
          <p
            className="lead text-center"
            style={{ fontSize: "1.5rem", fontWeight: "400" }}
          >
            Saaed Ventures Limited offers a wide range of healthcare services
            designed to meet the unique needs of our clients. Our services are
            built on the foundation of quality, innovation, and a commitment to
            improving healthcare outcomes.
          </p>
        </Col>
      </Row>

      {/* Detailed Descriptions Section */}
      <Row className="mb-5">
        <Col md={4}>
          <Card className="h-100 shadow-lg mb-4 border-0">
            <Card.Body>
              <Card.Title className="h3 mb-3">Consultancy Services</Card.Title>
              <Card.Text style={{ fontSize: "1.2rem" }}>
                Our consultancy services provide expert guidance in healthcare
                management, strategic planning, and operational excellence. We
                aim to enhance efficiency and deliver value-driven solutions for
                our clients.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-lg mb-4 border-0">
            <Card.Body>
              <Card.Title className="h3 mb-3">Training Programs</Card.Title>
              <Card.Text style={{ fontSize: "1.2rem" }}>
                We offer comprehensive training programs for healthcare
                professionals, focusing on skill development, leadership, and
                innovation. Our programs are tailored to meet the demands of the
                ever-evolving healthcare industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-lg mb-4 border-0">
            <Card.Body>
              <Card.Title className="h3 mb-3">Healthcare Solutions</Card.Title>
              <Card.Text style={{ fontSize: "1.2rem" }}>
                Our healthcare solutions encompass technology integration,
                patient care optimization, and infrastructure development. We
                strive to provide sustainable solutions that improve patient
                outcomes and healthcare delivery.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Form */}
      <Row>
        <Col md={8} className="mx-auto">
          <h3 className="text-center mb-4" style={{ fontSize: "2rem" }}>
            Service Inquiry Form
          </h3>
          <Card className="p-4 shadow-lg border-0">
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label style={{ fontSize: "1.2rem" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  style={{ fontSize: "1.1rem" }}
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label style={{ fontSize: "1.2rem" }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ fontSize: "1.1rem" }}
                />
              </Form.Group>
              <Form.Group controlId="formService" className="mb-3">
                <Form.Label style={{ fontSize: "1.2rem" }}>
                  Service Interested In
                </Form.Label>
                <Form.Control as="select" style={{ fontSize: "1.1rem" }}>
                  <option>Select a service</option>
                  <option>Consultancy Services</option>
                  <option>Training Programs</option>
                  <option>Healthcare Solutions</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label style={{ fontSize: "1.2rem" }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                  style={{ fontSize: "1.1rem" }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                style={{ fontSize: "1.2rem" }}
              >
                Submit Inquiry
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
