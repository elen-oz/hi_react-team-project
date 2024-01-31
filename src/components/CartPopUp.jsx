import React from "react";
import { Link } from "react-router-dom";

const CartPopUp = ({ isOpen, closeCart }) => {
  const cartStyle = {
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div
      className={`position-fixed shadow end-0 bg-white ${
        isOpen ? "" : "d-none"
      }`}
      style={{ width: "20rem", ...cartStyle, zIndex: 1050 }}
    >
      <div
        className='container my-5 p-4  mt-0bg-light'
        style={{ width: "17rem", overflowY: "auto" }}
      >
        <h5 className='text-center mt-3'>My Book Cart</h5>
        <hr />
        {/* <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.title} - {item.author}
            </ListGroup.Item>
          ))}
        </ListGroup> */}
        <div className='d-flex justify-content-between mt-3'>
          <Link to='./' className='btn btn-primary'>
            CHECKOUT
          </Link>
          {/* <button className='btn btn-secondary'>Go to Cart Page</button> */}
          <button className='btn btn-secondary' onClick={closeCart}>
            Close Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
