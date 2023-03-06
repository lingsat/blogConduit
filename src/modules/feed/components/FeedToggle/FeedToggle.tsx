import clsx from "clsx";
import { FC } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useAuth } from '../../../auth/hooks/useAuth';

export interface FeedToggleItem {
  text: string;
  link: string;
}

interface FeedToggleProps {
  defaultText?: string;
  defaultLink?: string;
  items?: FeedToggleItem[];
}

const FeedToggle: FC<FeedToggleProps> = ({
  defaultText = "Global Feed",
  defaultLink = "/",
  items = [],
}) => {
  const { isLoggedIn } = useAuth();

  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  const globalFeedClasses = ({ isActive }: { isActive: boolean }) =>
    clsx("bg-white border-maingreen py-2 px-4 hover:no-underline", {
      "text-black/30 hover:text-black/60": tag || !isActive,
      "border-b-2": !tag && isActive,
    });

  return (
    <div className="h-8">
      <ul>
        <li>
          <NavLink to={defaultLink} className={globalFeedClasses} end>
            {defaultText}
          </NavLink>
          {items.map((item, index) => (
            <NavLink key={index} to={item.link} className={globalFeedClasses}>
              {item.text}
            </NavLink>
          ))}
          {tag && (
            <span className="bg-white text-maingreen border-b-2 border-maingreen py-2 px-4">
              # {tag}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
