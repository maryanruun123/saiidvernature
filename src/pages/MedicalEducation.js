// src/pages/MedicalEducation.js

import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const MedicalEducation = () => {
  return (
    <Container className="py-5">
      <h2
        className="text-center mb-5"
        style={{ fontSize: "30px", fontWeight: "600", color: "#02475e" }}
      >
        Medical Education Programs
      </h2>

      {/* Courses and Programs */}
      <Row className="mb-5">
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#013a63",
                }}
              >
                List of Courses and Programs
              </Card.Title>
              <ListGroup
                variant="flush"
                style={{ fontSize: "18px", lineHeight: "1.75" }}
              >
                <ListGroup.Item>
                  Bachelor of Medicine, Bachelor of Surgery (MBBS) -
                  Comprehensive 5-year program
                </ListGroup.Item>
                <ListGroup.Item>
                  Master of Science in Nursing (MSN) - Specialized 2-year
                  program with a focus on advanced clinical skills
                </ListGroup.Item>
                <ListGroup.Item>
                  Doctor of Pharmacy (PharmD) - 4-year program integrating
                  clinical practice with drug management
                </ListGroup.Item>
                <ListGroup.Item>
                  Certificate in Public Health - 1-year program covering key
                  aspects of public health
                </ListGroup.Item>
                <ListGroup.Item>
                  Advanced Specialty Training Programs - Tailored durations
                  based on the specialty chosen
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Admission Procedures */}
      <Row className="mb-5">
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#013a63",
                }}
              >
                Admission Procedures and Calendar
              </Card.Title>
              <Card.Text style={{ fontSize: "18px", lineHeight: "1.75" }}>
                Admission is based on academic records, standardized test
                scores, and personal interviews.
              </Card.Text>
              <ListGroup
                variant="flush"
                style={{ fontSize: "18px", lineHeight: "1.75" }}
              >
                <ListGroup.Item>Applications open: April 1st</ListGroup.Item>
                <ListGroup.Item>
                  Deadline for submissions: September 30th
                </ListGroup.Item>
                <ListGroup.Item>
                  Required exams: MCAT, GRE, or equivalent, depending on the
                  program
                </ListGroup.Item>
                <ListGroup.Item>
                  Interviews conducted from January to March
                </ListGroup.Item>
                <ListGroup.Item>
                  Course prerequisites detailed per program requirements
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Faculty and Facilities */}
      <Row>
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#013a63",
                }}
              >
                Faculty Highlights and Campus Facilities
              </Card.Title>
              <Card.Text style={{ fontSize: "18px", lineHeight: "1.75" }}>
                Our faculty comprises leaders in various medical fields,
                committed to fostering a learning environment that encourages
                growth and innovation.
              </Card.Text>
              <ListGroup
                variant="flush"
                style={{ fontSize: "18px", lineHeight: "1.75" }}
              >
                <ListGroup.Item>
                  State-of-the-art teaching facilities
                </ListGroup.Item>
                <ListGroup.Item>
                  Modern laboratories equipped with the latest technology
                </ListGroup.Item>
                <ListGroup.Item>
                  Extensive medical libraries with a wide range of resources
                </ListGroup.Item>
                <ListGroup.Item>
                  Advanced clinical simulation centers to enhance hands-on
                  learning
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MedicalEducation;
