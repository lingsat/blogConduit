import React from "react";

const FavoriteButton = () => {
  return (
    <button className="text-maingreen border border-maingreen rounded text-center align-middle cursor-pointer select-none py-1 px-2 ml-auto text-sm hover:text-white hover:bg-maingreen focus:text-white focus:bg-darkgreen transition">
      <i className="ion-heart"></i>
      <span className='ml-1 font-normal'>70</span>
    </button>
  );
};

export default FavoriteButton;