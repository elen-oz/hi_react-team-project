import { Link } from "react-router-dom";
import { useContext } from "react";

function makeShorterName(name) {
  let nameArray = name;
  if (name.length > 17) {
    nameArray = `${name.slice(0, 18)}...`;
  }

  return nameArray;
}

const CardItem = ({ title, image, id, price, currency }) => {
  return (
    <div key={id} className="col ">
      <Link to={`/books/${id}`}>
        <div className="card">
          <div
            className="w-100 overflow-hidden d-flex align-items-center"
            style={{ height: "250px" }}
          >
            <img
              src={image}
              className="rounded object-cover w-100"
              alt={title}
            />
          </div>

          <div className="card-body">
            <h6 className="card-title fs-6">{makeShorterName(title)}</h6>
            <h6 className="card-title fs-6">
              {makeShorterName(price) + " " + currency}
            </h6>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
