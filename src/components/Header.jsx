import { Link } from 'react-router-dom';
import { BsHandbag } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link to='/.' className='navbar-brand'>
            HY Library
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link to='./' className='nav-link active'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='./about' className='nav-link'>
                  About
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Catalog
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link to='./' className='dropdown-item'>
                      Adventure
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item'>Biography</Link>
                  </li>
                  <li>
                    <Link className='dropdown-item'>Classics</Link>
                  </li>
                  <li>
                    <Link className='dropdown-item'>Fantasy</Link>
                  </li>
                  <li>
                    <Link className='dropdown-item'>Fiction</Link>
                  </li>
                  <li>
                    <Link className='dropdown-item'>Horror</Link>
                  </li>
                  <li>
                    <Link className='dropdown-item'>History</Link>
                  </li>

                  <li>
                    <Link className='dropdown-item'>Mystery</Link>
                  </li>
                  <li>
                    <Link className='dropdown-item'>Romance</Link>
                  </li>
                  <li>
                    <Link className='dropdown-item'>Science fiction</Link>
                  </li>
                  <li>
                    <Link className='dropdown-item'>Thriller</Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link'>
                  Contact
                </Link>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
            <div className='px-5'>
              <Link to='/checkout'>
                <BsHandbag size={24} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
