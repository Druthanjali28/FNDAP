'use client';
import React from 'react';
import Image from 'next/image';

const Rnews = ({ recommended, onSelect }) => {
  return (
    <div className="flex flex-col">
      {recommended.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 justify-between border-b mt-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
          onClick={() => onSelect(item)}
        >
          <div className="flex flex-col gap-3 mr-6 bg-white p-2 rounded-lg w-full">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-xs text-[#7b97b0]">
                {item.title}
              </h1>
              <h1 className="font-semibold text-xs text-gray-500">
                {item.date} | {item.time}
              </h1>
            </div>
          </div>
          {item.image && (
            <Image
              src={item.image}
              width={100}
              height={50}
              alt="news thumbnail"
              className="rounded-2xl h-fit"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Rnews;
