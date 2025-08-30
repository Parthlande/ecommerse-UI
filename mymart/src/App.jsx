import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import HeroSlideshow from "./components/HeroSlideshow";   // 👈 import it
import './App.css';

function App() {
  const allProducts = {
    "best-seller": [
      { id: 1, image: '/img/backpack.png', title: 'Backpack', price: '300.00', discount: '35%' },
      { id: 2, image: '/img/foot.png', title: 'Shoes', price: '800.00', discount: null },
      { id: 3, image: '/img/jacket.png', title: 'Jacket', price: '900.00', discount: '15%' },
      { id: 4, image: '/img/hoodi.png', title: 'Hoodi', price: '600.00', discount: '35%' },
      { id: 5, image: '/img/watches.png', title: 'Watch', price: '450.00', discount: '20%' },
      { id: 6, image: '/img/hat.png', title: 'Hat', price: '200.00', discount: null },
      { id: 7, image: '/img/jeans.png', title: 'Jeans', price: '350.00', discount: '25%' },
      { id: 8, image: '/img/kurta.png', title: 'Kurta', price: '300.00', discount: '60%' },
    ],
    "new-arrival": [
      { id: 1, image: '/img/backpack.png', title: 'Backpack', price: '300.00', discount: '35%' },
      { id: 2, image: '/img/foot.png', title: 'Shoes', price: '800.00', discount: null },
      { id: 3, image: '/img/jacket.png', title: 'Jacket', price: '900.00', discount: '15%' },
      { id: 4, image: '/img/hoodi.png', title: 'Hoodi', price: '600.00', discount: '35%' },
      { id: 5, image: '/img/watches.png', title: 'Watch', price: '450.00', discount: '20%' },
      { id: 6, image: '/img/hat.png', title: 'Hat', price: '200.00', discount: null },
      { id: 7, image: '/img/jeans.png', title: 'Jeans', price: '350.00', discount: '25%' },
      { id: 8, image: '/img/kurta.png', title: 'Kurta', price: '300.00', discount: '60%' },
    ],
    "top-rated": [
      { id: 1, image: '/img/backpack.png', title: 'Backpack', price: '300.00', discount: '35%' },
      { id: 2, image: '/img/foot.png', title: 'Shoes', price: '800.00', discount: null },
      { id: 3, image: '/img/jacket.png', title: 'Jacket', price: '900.00', discount: '15%' },
      { id: 4, image: '/img/hoodi.png', title: 'Hoodi', price: '600.00', discount: '35%' },
      { id: 5, image: '/img/watches.png', title: 'Watch', price: '450.00', discount: '20%' },
      { id: 6, image: '/img/hat.png', title: 'Hat', price: '200.00', discount: null },
      { id: 7, image: '/img/jeans.png', title: 'Jeans', price: '350.00', discount: '25%' },
      { id: 8, image: '/img/kurta.png', title: 'Kurta', price: '300.00', discount: '60%' },
    ]
  };

  const [activeTab, setActiveTab] = useState('best-seller');

  return (
    <div>
      <Header />
      <HeroSlideshow />
      

      {/* Feature Icons */}
      <Container className="my-5">
        <Row className="text-center g-4">
          {[
            { img: '/img/shipping.png', title: 'Free Shipping', subtitle: 'On All Orders Over Rs:99' },
            { img: '/img/secure.png', title: 'Secure Payment', subtitle: 'We ensure secure payment' },
            { img: '/img/money.png', title: '100% Money Back', subtitle: '10 Days Return Policy' },
            { img: '/img/support.png', title: 'Online Support', subtitle: '24/7 Dedicated Support' },
          ].map((feature, idx) => (
            <Col xs={12} sm={6} md={3} key={idx} className="d-flex align-items-center justify-content-center">
              <img src={feature.img} alt={feature.title} className="feature-icon me-2" style={{ width: "40px", height: "40px" }} />
              <div>
                <p className="mb-0 fw-bold">{feature.title}</p>
                <small className="text-muted">{feature.subtitle}</small>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Promotional Banners */}
      <Container className="my-5">
        <Row className="g-4 align-items-start flex-column flex-md-row">
          {/* Left Big Jacket Box */}
          <Col xs={12} md={6}>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center" style={{ backgroundColor: "#bfdcf1ff", borderRadius: "12px", padding: "10px" }}>
              <img src="/img/jacket.png" alt="Jacket Collection" className="img-fluid" style={{ width: "100%", maxWidth: "300px", height: "auto" }} />
              <div className="ms-md-3 mt-3 mt-md-0 text-center text-md-start">
                <h4 className="text-primary mb-1 fs-5">New Arrivals</h4>
                <h3 className="fw-bold mb-1 fs-4">Jacket Collection</h3>
                <Button variant="outline-dark" className="mt-1">Shop Now</Button>
              </div>
            </div>
          </Col>

          {/* Right Two Smaller Boxes */}
          <Col xs={12} md={6}>
            <Row className="g-4">
              <Col xs={12} sm={6}>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 h-100" style={{ backgroundColor: '#def2b2ff', borderRadius: '10px' }}>
                  <img src="/img/foot.png" alt="Footwears" className="img-fluid me-md-3 mb-2 mb-md-0" style={{ width: "100%", maxWidth: "100px", height: "auto", objectFit: "contain" }} />
                  <div className="text-center text-md-start">
                    <span className="text-primary fw-bold">35% OFF</span>
                    <h5 className="fw-bold mb-1">Footwears</h5>
                    <a href="#">Shop Now &gt;</a>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 h-100" style={{ backgroundColor: '#f1d6bcff', borderRadius: '10px' }}>
                  <img src="/img/watches.png" alt="Watch" className="img-fluid me-md-3 mb-2 mb-md-0" style={{ width: "100%", maxWidth: "100px", height: "auto", objectFit: "contain" }} />
                  <div className="text-center text-md-start">
                    <span className="text-primary fw-bold">45% OFF</span>
                    <h5 className="fw-bold mb-1">Watch</h5>
                    <a href="#">Shop Now &gt;</a>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Bottom Full-Width Hoodie Box */}
            <Row className="g-4 mt-4">
              <Col xs={12}>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3" style={{
                  borderRadius: "10px",
                  backgroundImage: "url('/img/back.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '150px'
                }}>
                  <img src="/img/hoodi.png" alt="Hoodies" className="img-fluid me-md-3 mb-2 mb-md-0" style={{ width: "100%", maxWidth: "275px", height: "auto", objectFit: "contain" }} />
                  <div className="text-center text-md-start">
                    <span className="text-primary fw-bold">50% OFF</span>
                    <h5 className="fw-bold">Hoodies</h5>
                    <a href="#">Shop Now &gt;</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Featured Products with Tabs */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        {/* Tabs */}
        <div className="d-flex justify-content-center mt-3 mb-3 flex-wrap">
          {["best-seller", "new-arrival", "top-rated"].map(tab => (
            <button
              key={tab}
              className={`btn ${activeTab === tab ? "btn-primary" : "btn-outline-primary"} mx-2 my-1`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>

        {/* Products */}
        <Row className="g-4">
          {allProducts[activeTab].map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Bottom Two Boxes Section */}
      <Container className="my-5">
        <Row className="g-4 justify-content-center flex-column flex-md-row">
          <Col xs={12} md={6}>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 h-100" style={{ backgroundColor: '#def2b2ff', borderRadius: '10px' }}>
              <img src="/img/hero.png" alt="Footwears" className="img-fluid me-md-4 mb-2 mb-md-0" style={{ width: "100%", maxWidth: "80px", height: "auto", objectFit: "contain" }} />
              <div className="text-center text-md-start">
                <span className="text-primary fw-bold">Fashion Style</span>
                <h5 className="fw-bold mb-1">Womens Fashion</h5>
                <a href="#">Shop Now &gt;</a>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 h-100" style={{ backgroundColor: '#f1d6bcff', borderRadius: '10px' }}>
              <img src="/img/mensfass.png" alt="Mens Fashion" className="img-fluid me-md-4 mb-2 mb-md-0" style={{ width: "100%", maxWidth: "80px", height: "auto", objectFit: "contain" }} />
              <div className="text-center text-md-start">
                <span className="text-primary fw-bold">Weekend Sale up to 60% OFF</span>
                <h5 className="fw-bold mb-1">Mens Fashion</h5>
                <a href="#">Shop Now &gt;</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-5">
        <Container className="text-center">
          <small>© 2025 MyMart. All Rights Reserved.</small>
        </Container>
      </footer>
    </div>
  );
}

export default App;
