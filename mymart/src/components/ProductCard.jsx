import React from 'react';
import { Card } from 'react-bootstrap';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const ProductCard = ({ image, title, price, discount }) => {
  return (
    <Card className="h-100 shadow-sm border-0 product-card">
      {/* Image with responsive height */}
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={image} 
          className="product-img"
        />
        {discount && (
          <div className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-warning text-white rounded-pill fs-7">
            {discount} OFF
          </div>
        )}
      </div>

      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="fs-6 text-center">{title}</Card.Title>

        {/* Rating Stars */}
        <div className="mb-2 d-flex justify-content-center">
          <BsStarFill className="text-warning me-1" />
          <BsStarFill className="text-warning me-1" />
          <BsStarFill className="text-warning me-1" />
          <BsStarHalf className="text-warning me-1" />
          <BsStar className="text-warning" />
        </div>

        <p className="fs-5 fw-bold mb-0">Rs {price}</p>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
