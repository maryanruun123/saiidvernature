// src/pages/NewsInsights.js

import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const NewsInsights = () => {
  return (
    <Container className="py-5">
      <h2
        className="text-center mb-5"
        style={{ fontSize: "36px", fontWeight: "bold" }}
      >
        News and Insights
      </h2>

      {/* Blog Posts */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow mb-5">
            <Card.Header className="fs-4 fw-bold">
              Latest Blog Posts
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ fontSize: "20px", padding: "20px" }}>
                <strong>Understanding Telemedicine:</strong> A comprehensive
                guide to how telemedicine works and its benefits for remote
                areas.
              </ListGroup.Item>
              <ListGroup.Item style={{ fontSize: "20px", padding: "20px" }}>
                <strong>Advancements in Cardiac Care:</strong> Exploring the
                latest innovations in treating heart diseases.
              </ListGroup.Item>
              <ListGroup.Item style={{ fontSize: "20px", padding: "20px" }}>
                <strong>Preventive Healthcare Tips:</strong> Daily practices to
                maintain and improve your health.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Press Releases */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow mb-5">
            <Card.Header className="fs-4 fw-bold">
              Recent Press Releases
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ fontSize: "20px", padding: "20px" }}>
                <strong>Launch of New Oncology Wing:</strong> Official
                announcement of our state-of-the-art oncology wing, designed to
                provide cutting-edge treatments.
              </ListGroup.Item>
              <ListGroup.Item style={{ fontSize: "20px", padding: "20px" }}>
                <strong>Partnership with Tech Health Solutions:</strong> Details
                on our collaboration with a leading technology firm to enhance
                patient diagnostics.
              </ListGroup.Item>
              <ListGroup.Item style={{ fontSize: "20px", padding: "20px" }}>
                <strong>Annual Healthcare Conference:</strong> Highlights from
                our recent conference discussing future trends in healthcare.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Community Engagement */}
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Header className="fs-4 fw-bold">
              Community Engagement Stories
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ fontSize: "20px", padding: "20px" }}>
                <strong>Mobile Health Clinics:</strong> Our initiative to bring
                medical services to underserved communities, reaching thousands
                annually.
              </ListGroup.Item>
              <ListGroup.Item style={{ fontSize: "20px", padding: "20px" }}>
                <strong>Health Education Programs:</strong> Free educational
                workshops on nutrition and wellness that we offer in local
                schools and community centers.
              </ListGroup.Item>
              <ListGroup.Item style={{ fontSize: "20px", padding: "20px" }}>
                <strong>Volunteering for Health:</strong> Stories from our
                employees volunteering in various health drives and the impact
                they've made.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsInsights;
