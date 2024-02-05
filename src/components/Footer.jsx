import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../hooks/themeContext';

const Footer = () => {
  let { bgColorClass, textColorClass } = useContext(ThemeContext);

  return (
    <div className={bgColorClass}>
      <div className='container'>
        <footer className='row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-3 mt-4 border-top'>
          <div className='col mb-3'>
            <h5 className={textColorClass}>ABOUT HI LIBRARY</h5>
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
            <h5 className={textColorClass}>HELP & SUPPORT</h5>
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
            <h5 className={textColorClass}>Schedule</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2 text-body-secondary'>
                Monday-Sunday
              </li>
              <li className='nav-item mb-2 text-body-secondary'>9am-11pm</li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5 className={textColorClass}>Follow Us</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a
                  href='https://github.com/collaboration-work/team-7-react-project'
                  className='nav-link p-0 text-body-secondary'
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5 className={textColorClass}>Address</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2 text-body-secondary'>
                Virkesvägen 2, 12030, Stockholm
              </li>
            </ul>
          </div>
          <hr style={{ width: '100%' }} />
          <div className='d-flex justify-content-between w-100'>
            <div className='col'>
              <p className='text-body-secondary' style={{ fontSize: 'larger' }}>
                TEAM 7
              </p>
            </div>
            <div className='col mb-3'>
              <svg className='bi me-2' width='40' height='32'>
                <use xlinkHref='#bootstrap'></use>
              </svg>
              <p
                className='text-body-secondary'
                style={{ fontSize: 'smaller' }}
              >
                Copyright ©2024 Google Books, Inc or related companies. All
                rights reserved, including rights for text and data mining and
                training of artificial technologies or similar technologies.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
