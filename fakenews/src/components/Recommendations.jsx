import React from 'react';
import { NEWS } from '@/constants';
import { IoSearchOutline } from 'react-icons/io5';
import { RiArrowRightSLine } from 'react-icons/ri';
import Highlight from './Highlight';
import Rnews from './Rnews';

const Recommendations = ({ recommended, onSelect }) => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <div className="flex justify-between items-center px-4 py-3 text-sm bg-gray-200 rounded-xl ">
        <input
          type="text"
          placeholder="Article name, tag, category..."
          className="outline-none w-full"
        />
        <IoSearchOutline size={20} />

        <h1 className="flex gap-1 items-center font-semibold text-sm text-gray-600">
          View all <RiArrowRightSLine />
        </h1>
      </div>
      <div className="overflow-y-scroll h-[75vh] overflow-x-hidden flex flex-col gap-2">
        <Rnews recommended={recommended} onSelect={onSelect} />
      </div>
    </div>
  );
};

export default Recommendations;
