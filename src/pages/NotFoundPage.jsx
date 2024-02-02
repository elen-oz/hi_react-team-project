import { useContext } from 'react';
import { ThemeContext } from '../hooks/themeContext';

const NotFoundPage = () => {
  const { textColorClass } = useContext(ThemeContext);

  return (
    <div className={`container ${textColorClass}`}>
      <h1 className='mx-auto p-2' style={{ width: '400px' }}>
        404: Page Not Found
      </h1>
    </div>
  );
};
export default NotFoundPage;
