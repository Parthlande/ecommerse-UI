import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col md={6} className="text-center text-md-start">
            <p className="season-sale mb-1">Season Sale</p>
            <h1 className="fw-bold display-4 hero-title">MEN'S FASHION</h1>
            <p className="lead fs-5">Min. 35-70% Off</p>
            
            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-md-start">
              <Button variant="primary" className="rounded-pill px-4">SHOP NOW</Button>
              <Button variant="outline-primary" className="rounded-pill px-4">READ MORE</Button>
            </div>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img src="/img/hero.png" alt="Men's Fashion" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
