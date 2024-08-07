// src/pages/ResearchDevelopment.js

import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const ResearchDevelopment = () => {
  return (
    <Container className="py-5">
      <h2
        className="text-center mb-5"
        style={{ fontSize: "30px", fontWeight: "bold" }}
      >
        Research and Development Efforts
      </h2>

      {/* Current Projects */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow mb-4">
            <Card.Header className="fs-5 fw-bold">
              Ongoing Projects and Innovations
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                <strong>Telemedicine Networks:</strong> Expanding our telehealth
                services to enhance access to medical care for patients in
                remote areas, using cutting-edge technology to connect with
                specialists worldwide.
              </ListGroup.Item>
              <ListGroup.Item
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                <strong>Biomedical Devices:</strong> Developing advanced
                diagnostic and therapeutic devices that can revolutionize the
                treatment of chronic diseases.
              </ListGroup.Item>
              <ListGroup.Item
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                <strong>Pharmacogenomics:</strong> Tailoring drug treatments to
                individual genetic profiles to increase efficacy and reduce
                adverse effects.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Impact */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow mb-4">
            <Card.Header className="fs-5 fw-bold">
              Impact on Healthcare and Patient Care
            </Card.Header>
            <Card.Body>
              <p style={{ fontSize: "20px" }}>
                The research conducted by our teams has led to significant
                advancements in patient care protocols, with numerous studies
                published in top medical journals. Our findings have been
                instrumental in shaping modern medical practices and improving
                outcomes for patients across various disciplines.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Partnerships */}
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Header className="fs-5 fw-bold">
              Strategic Research Partnerships
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                Our partnerships with leading healthcare technology firms and
                academic institutions worldwide have fostered a rich environment
                for cross-disciplinary research, ensuring that we remain at the
                forefront of medical science.
              </ListGroup.Item>
              <ListGroup.Item
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                We regularly collaborate with international health organizations
                to tackle global health challenges, sharing knowledge and
                resources to develop solutions that benefit communities
                worldwide.
              </ListGroup.Item>
              <ListGroup.Item
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                Our team actively participates in government and private sector
                initiatives to drive policy changes based on our research
                findings, impacting healthcare standards on a national and
                global scale.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResearchDevelopment;
