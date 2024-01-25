import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BookPage = () => {
  const { id } = useParams();

  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        const data = await response.json();

        setBookDetails(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  return (
    <div className="container">
      {bookDetails ? (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={bookDetails.volumeInfo.imageLinks.thumbnail}
            className="card-img-top"
            alt={bookDetails.volumeInfo.title}
          />

          <div className="card-body">
            <h5 className="card-title">{bookDetails.volumeInfo.title}</h5>
            <p className="card-text">{bookDetails.volumeInfo.description}</p>
            <button className="btn btn-primary">More Info</button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BookPage;
