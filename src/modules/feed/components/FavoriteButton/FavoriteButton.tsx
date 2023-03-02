import { FC } from "react";

interface FavoriteButtonProps {
  count: number;
  extended?: boolean;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ count, extended = false }) => {
  return (
    <button className="text-maingreen border border-maingreen rounded text-center align-middle cursor-pointer select-none py-1 px-2 ml-auto text-sm hover:text-white hover:bg-maingreen focus:text-white focus:bg-darkgreen transition">
      <i className="ion-heart"></i>
      <span className="ml-1 font-normal">
        {extended ? `Fovorite Article (${count})` : count}
      </span>
    </button>
  );
};

export default FavoriteButton;
