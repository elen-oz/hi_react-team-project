import { useContext } from 'react';
import { ThemeContext } from '../hooks/themeContext';
import ListCardItems from '../components/ListCardItems';

const Homepage = ({ category }) => {
  const { bgColorClass } = useContext(ThemeContext);
  return (
    <div className={`w-100 ${bgColorClass}`}>
      <div className={`container p-2`}>
        {category && (
          <div className='p-3'>
            <h5 style={{ paddingLeft: '5%' }}>{`Category > ${category}`}</h5>
          </div>
        )}
        <div className='d-flex row justify-content-center align-items-center g-3'>
          <ListCardItems />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
