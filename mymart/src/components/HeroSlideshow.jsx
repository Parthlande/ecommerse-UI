import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

function HeroSlideshow() {
  return (
    <Carousel fade interval={2000} wrap={true} indicators={true}>
  {/* Slide 1 */}
  <Carousel.Item>
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Left Text */}
        <Col md={6} className="text-center text-md-start">
          <p className="season-sale mb-1">Season Sale</p>
          <h1 className="fw-bold display-4 hero-title">MEN'S FASHION</h1>
          <p className="lead fs-5">Min. 35-70% Off</p>

          <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-md-start">
            <Button variant="primary" className="rounded-pill px-4">
              SHOP NOW
            </Button>
            <Button variant="outline-primary" className="rounded-pill px-4">
              READ MORE
            </Button>
          </div>
        </Col>

        {/* Right Image */}
        <Col md={6} className="text-center mt-4 mt-md-0">
          <img src="/img/hero.png" alt="Men's Fashion" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  </Carousel.Item>

  {/* Slide 2 */}
  <Carousel.Item>
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Left Text */}
        <Col md={6} className="text-center text-md-start">
          <p className="season-sale mb-1">New Arrivals</p>
          <h1 className="fw-bold display-4 hero-title">WOMEN'S FASHION</h1>
          <p className="lead fs-5">Flat 50% Off</p>

          <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-md-start">
            <Button variant="primary" className="rounded-pill px-4">
              SHOP NOW
            </Button>
            <Button variant="outline-primary" className="rounded-pill px-4">
              READ MORE
            </Button>
          </div>
        </Col>

        {/* Right Image */}
        <Col md={6} className="text-center mt-4 mt-md-0">
          <img src="/img/wfass.png" alt="Women's Fashion" className="img-fluid" style={{ width: "100%", maxWidth: "300px", height: "auto", objectFit: "contain" }}/>
        </Col>
      </Row>
    </Container>
  </Carousel.Item>
</Carousel>

  );
}

export default HeroSlideshow;
