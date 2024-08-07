// src/pages/HealthInsurance.js

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Accordion,
  Button,
} from "react-bootstrap";

const HealthInsurance = () => {
  return (
    <Container className="py-5">
      <h2
        className="text-center mb-4"
        style={{ fontSize: "28px", fontWeight: "bold" }}
      >
        Health Insurance Plans
      </h2>

      {/* Insurance Plans Offered */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="fs-5 fw-bold">
                Types of Insurance Plans Offered
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{
                    fontSize: "18px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Comprehensive Health Cover - Full coverage for medical,
                  surgical, and hospital expenses.
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    fontSize: "18px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Critical Illness Insurance - Coverage for severe illnesses
                  such as cancer and heart disease.
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    fontSize: "18px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Health Savings Account (HSA) Plans - Tax-advantaged
                  high-deductible health plans.
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    fontSize: "18px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Family and Individual Plans - Coverage tailored to individual
                  or family health needs.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* How to Choose a Plan */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="fs-5 fw-bold">
                How to Choose the Right Plan
              </Card.Title>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Evaluate Your Healthcare Needs
                  </Accordion.Header>
                  <Accordion.Body style={{ fontSize: "16px" }}>
                    Consider your and your family’s health care needs including
                    chronic conditions, regular medications, and potential
                    future health expenses.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Analyze Costs and Coverage
                  </Accordion.Header>
                  <Accordion.Body style={{ fontSize: "16px" }}>
                    Compare premiums, deductibles, and out-of-pocket maximums.
                    Look for coverage details on preventative care,
                    hospitalization, and emergency services.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Check the Provider Network
                  </Accordion.Header>
                  <Accordion.Body style={{ fontSize: "16px" }}>
                    Ensure your preferred healthcare providers and facilities
                    are covered under the network to avoid higher out-of-network
                    charges.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* FAQs and Coverage Details */}
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="fs-5 fw-bold">
                Frequently Asked Questions
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{
                    fontSize: "18px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <strong>What is a deductible?</strong>
                  <p>
                    The amount you pay for health care services before your
                    health insurance begins to pay.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    fontSize: "18px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <strong>How can I add a family member to my plan?</strong>
                  <p>
                    You can add family members during the annual enrollment
                    period or after qualifying life events like marriage or
                    birth.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    fontSize: "18px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <strong>What is covered under emergency services?</strong>
                  <p>
                    Most plans cover services like emergency room visits,
                    ambulance services, and urgent care needs.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HealthInsurance;
