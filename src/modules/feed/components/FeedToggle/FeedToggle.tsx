import clsx from 'clsx';
import { NavLink, useSearchParams } from "react-router-dom";

const FeedToggle = () => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  const globalFeedClasses = clsx('bg-white border-maingreen py-2 px-4 hover:text-black/60 hover:no-underline',{
    'text-black/30': tag,
    'border-b-2': !tag,
  })

  return (
    <div className="h-8">
      <ul>
        <li>
          <NavLink
            to="/"
            className={globalFeedClasses}
          >
            Global Feed
          </NavLink>
          {tag && <span className='bg-white text-maingreen border-b-2 border-maingreen py-2 px-4'># {tag}</span>}
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
