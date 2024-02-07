import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';

const Footer = () => {
  let { bgColorClass } = useContext(ThemeContext);

  return (
    <div className={`${bgColorClass} text-body-secondary`}>
      <div className='container'>
        <footer className='row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-3 mt-4 border-top'>
          <div className='col mb-3'>
            <h5>About HI Library</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <Link
                  to='/privacy'
                  className='nav-link p-0 text-body-secondary'
                >
                  Privacy Policy
                </Link>
              </li>
              <li className='nav-item mb-2'>
                <Link to='/terms' className='nav-link p-0 text-body-secondary'>
                  Terms of Use
                </Link>
              </li>

              <li className='nav-item mb-2'>
                <Link
                  to='/accessibility'
                  className='nav-link p-0 text-body-secondary'
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5>Help & Support</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <Link
                  to='/contact'
                  className='nav-link p-0 text-body-secondary'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5>Schedule</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>Monday-Sunday</li>
              <li className='nav-item mb-2'>9am-11pm</li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5>Follow Us</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a
                  href='https://github.com/elen-oz/hi_react-team-project'
                  className='nav-link p-0 text-body-secondary'
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5>Address</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>Virkesvägen 2, 12030, Stockholm</li>
            </ul>
          </div>
          <hr style={{ width: '100%' }} />
          <div className='d-flex justify-content-between w-100'>
            <div className='col'>
              <p style={{ fontSize: 'larger' }}>TEAM 7</p>
            </div>
            <div className='col'>
              <p style={{ fontSize: 'smaller' }}>
                Copyright ©2024 Google Books, Inc or related companies.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
