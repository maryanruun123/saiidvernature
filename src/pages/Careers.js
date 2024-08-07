// src/pages/Careers.js

import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Careers = () => {
  return (
    <Container className="py-5">
      <h1
        className="text-center mb-5"
        style={{ fontSize: "32px", fontWeight: "bold", color: "#0056b3" }}
      >
        Careers at Saaed Ventures
      </h1>

      {/* Current Vacancies */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow" style={{ padding: "20px" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "26px", marginBottom: "15px" }}>
                Current Vacancies
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ fontSize: "20px" }}>
                  <h5>Senior Software Developer</h5>
                  <p>
                    <strong>Requirements:</strong> 5+ years in software
                    development, expertise in React and Node.js.
                  </p>
                  <p>
                    <strong>Benefits:</strong> Competitive salary, remote work
                    options, health insurance.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item style={{ fontSize: "20px" }}>
                  <h5>Project Manager</h5>
                  <p>
                    <strong>Requirements:</strong> Experience in project
                    management, familiarity with Agile methodologies.
                  </p>
                  <p>
                    <strong>Benefits:</strong> Health benefits, flexible hours,
                    opportunity for growth.
                  </p>
                </ListGroup.Item>
                {/* Add more job listings as needed */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Culture and Employee Testimonials */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow" style={{ padding: "20px" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "26px", marginBottom: "15px" }}>
                Culture at Saaed Ventures
              </Card.Title>
              <p style={{ fontSize: "18px" }}>
                Explore what it's like to work at Saaed Ventures. Our culture is
                built on innovation, respect, and teamwork.
              </p>
              <p style={{ fontSize: "18px" }}>
                <strong>Employee Testimonial:</strong> "Working at Saaed
                Ventures has been a transformative experience. The collaborative
                environment and supportive peers have driven my professional
                growth." - Jane Doe
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Application Guide */}
      <Row>
        <Col>
          <Card className="shadow" style={{ padding: "20px" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "26px", marginBottom: "15px" }}>
                How to Apply
              </Card.Title>
              <p style={{ fontSize: "18px" }}>
                To apply for a position at Saaed Ventures, please follow these
                steps:
              </p>
              <ol style={{ fontSize: "18px" }}>
                <li>
                  Review the detailed job descriptions and align your
                  experience.
                </li>
                <li>Prepare your resume and any other required documents.</li>
                <li>
                  Submit your application via the designated email:
                  careers@saaedventures.com.
                </li>
                <li>
                  Expect a response within two weeks regarding the next steps.
                </li>
              </ol>
              <p style={{ fontSize: "18px" }}>
                For more information, feel free to contact our HR department
                directly at hr@saaedventures.com.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Careers;
