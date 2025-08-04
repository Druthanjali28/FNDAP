'use client';
import React from 'react';
import { NEWS } from '@/constants';
import Marquee from 'react-fast-marquee';

const NewsSection = () => {
  return (
    <Marquee className="">
      {NEWS.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 mr-6 bg-white p-4 rounded-lg "
        >
          <div className="flex gap-4">
            <h1 className="flex font-semibold text-xs text-[#7b97b0]">
              {item.label}
            </h1>
            <h1 className="flex font-semibold text-xs text-gray-500">
              {item.time}
            </h1>
          </div>
          <h1 className="font-bold text-md w-[200px] h-[100px] line-clamp-4">
            {item.desc}
          </h1>
        </div>
      ))}
    </Marquee>
  );
};

export default NewsSection;
