import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BookPage from "./components/BookPage";
import CheckoutPage from "./components/CheckoutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/books/:id' element={<BookPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
