import { Link } from "react-router-dom";

const CardItem = ({ bookId }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <Link to={`/bookpage/${bookId}`}>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to={`/bookpage/${bookId}`}>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to={`/bookpage/${bookId}`}>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
