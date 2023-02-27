import { NavLink } from 'react-router-dom';

const FeedToggle = () => {
  return (
    <div className='h-8'>
      <ul>
        <li>
          <NavLink to="/" className="bg-white border-b-2 border-maingreen py-2 px-4">Global Feed</NavLink>
        </li>
      </ul>
    </div>
  )
};

export default FeedToggle;
