import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsPerson, BsSearch, BsBag } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-primary text-white py-2">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <span className="mb-1 mb-md-0">📞 +1 (123) 456-7890</span>
            <span className="d-none d-md-block">Welcome to Our Store</span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="bg-white py-3 shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4">
            MyMart.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto flex-column flex-lg-row text-center text-lg-start">
              <Nav.Link href="#" className="mx-lg-2 my-1 my-lg-0">Home</Nav.Link>
              <Nav.Link href="#" className="mx-lg-2 my-1 my-lg-0">Shop</Nav.Link>
              <Nav.Link href="#" className="mx-lg-2 my-1 my-lg-0">Pages</Nav.Link>
              <Nav.Link href="#" className="mx-lg-2 my-1 my-lg-0">Blog</Nav.Link>
              <Nav.Link href="#" className="mx-lg-2 my-1 my-lg-0">Elements</Nav.Link>
              <Nav.Link href="#" className="mx-lg-2 my-1 my-lg-0">Buy</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center mt-2 mt-lg-0">
              <Nav.Link href="#" className="ms-2" aria-label="Search">
                <BsSearch size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="ms-2" aria-label="Account">
                <BsPerson size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="ms-2" aria-label="Cart">
                <BsBag size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
