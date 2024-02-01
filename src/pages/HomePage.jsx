import ListCardItems from '../components/ListCardItems';

const Homepage = ({ category }) => {
  return (
    <div className='container p-2'>
      {category && (
        <div className='p-3'>
          <h5 style={{ paddingLeft: '5%' }}>{`Category > ${category}`}</h5>
        </div>
      )}
      <div className='d-flex row justify-content-center align-items-center g-3'>
        <ListCardItems />
      </div>
    </div>
  );
};

export default Homepage;
