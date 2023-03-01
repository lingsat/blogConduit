import clsx from 'clsx';
import { FC } from 'react';
import { NavLink, useSearchParams } from "react-router-dom";

interface FeedToggleProps {
  defaultText?: string;
  defaultLink?: string;
}

const FeedToggle: FC<FeedToggleProps> = ({ defaultText = 'Global Feed', defaultLink = '/' }) => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  const globalFeedClasses = clsx('bg-white border-maingreen py-2 px-4 hover:no-underline',{
    'text-black/30 hover:text-black/60': tag,
    'border-b-2': !tag,
  })

  return (
    <div className="h-8">
      <ul>
        <li>
          <NavLink
            to={defaultLink}
            className={globalFeedClasses}
          >
            {defaultText}
          </NavLink>
          {tag && <span className='bg-white text-maingreen border-b-2 border-maingreen py-2 px-4'># {tag}</span>}
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
