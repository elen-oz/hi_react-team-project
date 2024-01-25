const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div className='col mb-3'>
          <a
            href='/'
            className='d-flex align-items-center mb-3 link-body-emphasis text-decoration-none'
          >
            <svg className='bi me-2' width='40' height='32'>
              <use xlinkHref='#bootstrap'></use>
            </svg>
          </a>
          <p className='text-body-secondary'>© 2023</p>
        </div>

        <div className='col mb-3'></div>

        <div className='col mb-3'>
          <h5>Schedule</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-body-secondary'>
                Monday-Sunday
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-body-secondary'>
                9am-11pm
              </a>
            </li>
          </ul>
        </div>

        <div className='col mb-3'>
          <h5>Follow Us</h5>
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
          <h5>Address</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-body-secondary'>
                Virkesvägen 2, 12030, Stockholm
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
