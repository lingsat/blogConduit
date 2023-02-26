import React from "react";

const TagList = () => {
  return (
    <ul className='flex gap-1'>
      <li className='font-light text-sm text-tag border border-lightgray rounded-3xl px-2.5 mb-1'>movie</li>
      <li className='font-light text-sm text-tag border border-lightgray rounded-3xl px-2.5 mb-1'>serial</li>
      <li className='font-light text-sm text-tag border border-lightgray rounded-3xl px-2.5 mb-1'>game</li>
      <li className='font-light text-sm text-tag border border-lightgray rounded-3xl px-2.5 mb-1'>book</li>
    </ul>
  )
};

export default TagList;
