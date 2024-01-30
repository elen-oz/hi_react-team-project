import { Link } from 'react-router-dom';

const CardItem = ({ title, image }) => {
  return <div>{title}</div>;
  // return (
  //   <div className="container text-center">
  //     <div className="row">

  //       {books.map((book) => (
  //         <div key={book.id} className="col">
  //           <Link to={`/books/${book.id}`}>
  //             <div className="card" style={{ width: "18rem" }}>
  //               <img
  //                 src={image}
  //                 className="card-img-top"
  //                 alt={book.volumeInfo.title}
  //               />
  //               <div className="card-body">
  //                 <h5 className="card-title">{book.volumeInfo.title}</h5>
  //                 <button className="btn btn-primary">Go somewhere</button>
  //               </div>
  //             </div>
  //           </Link>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default CardItem;
