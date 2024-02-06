import { useContext } from 'react';
import { ThemeContext } from '../hooks/themeContext';
import ListCardItems from '../components/ListCardItems';

const Homepage = ({ category }) => {
  const { bgColorClass, textColorClass } = useContext(ThemeContext);
  return (
    <div className={bgColorClass}>
      <section id='top' className={`container col-xxl-8 px-4`}>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <img
              src='/2.png'
              className='d-block mx-lg-auto img-fluid'
              alt='Bootstrap Themes'
              width='700'
              height='500'
              loading='lazy'
            />
          </div>
          <div className='col-lg-6'>
            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
              HI Library brings the entire library to your fingertips
            </h1>
            <p className='lead'>
              Explore, Borrow, Buy – All in One Place Gone are the days of
              wandering through physical aisles or waiting for your next book
              delivery.
            </p>
            <p>Ready to embark on your next literary adventure?</p>
            {/* <p>
              Click below to Go to Books and start exploring the vast universe
              of stories waiting
            </p> */}
            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              <a
                href='#shop'
                type='button'
                className='btn btn-primary btn-lg px-4 me-md-2'
              >
                Go to Books
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='shop' style={{ paddingTop: '60px' }}>
        <div className={`w-100 ${bgColorClass}`}>
          <div className={`container`}>
            {category ? (
              <div className={`p-3 ${textColorClass}`}>
                <h5
                  style={{ paddingLeft: '5%' }}
                >{`Category > ${category}`}</h5>
              </div>
            ) : (
              <div className={`p-3 ${textColorClass}`}>
                <h5 style={{ paddingLeft: '5%' }}>{`Category > All Books`}</h5>
              </div>
            )}
            <div className='d-flex row justify-content-start align-items-center g-3'>
              <ListCardItems />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
