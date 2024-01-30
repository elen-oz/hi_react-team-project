import { Link } from "react-router-dom";
import { useState } from "react";
import ReviewModal from "./ReviewModal";

function makeShorterName(name) {
  let nameArray = name;
  if (name.length > 17) {
    nameArray = `${name.slice(0, 18)}...`;
  }

  return nameArray;
}

const CardItem = ({ title, image, id }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (e) => {
    // e.stopPropagation();
    setShowModal(!showModal);
  };
  return (
    <div key={id} className='col '>
      <div className='card align-items-center'>
        <Link to={`/books/${id}`}>
          <div
            className='w-100 overflow-hidden d-flex align-items-center'
            style={{ height: "250px" }}
          >
            <img
              src={image}
              className='rounded  object-cover w-100'
              alt={title}
            />
          </div>

          <div className='card-body'>
            <h6 className='card-title fs-6'>{makeShorterName(title)}</h6>
          </div>
        </Link>

        <div className='d-flex gap-2 mb-3'>
          <button className='btn btn-primary'>Add to Cart</button>
          <button
            className='btn btn-info'
            data-bs-toggle='modal'
            data-bs-target={`#reviewModal${id}`}
            onClick={toggleModal}
          >
            Review
          </button>
          <ReviewModal
            id={id}
            title={title}
            show={showModal}
            handleClose={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
