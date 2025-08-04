'use client';
import React from 'react';
import Image from 'next/image';

const Section = ({ selectedNews }) => {
  if (!selectedNews) return null;

  return (
    <div className="grid grid-cols-[0.7fr_0.3fr] gap-6 bg-white rounded-xl shadow-md p-6 h-full">
      <div className="flex flex-col gap-4 overflow-hidden">
        <h1 className="font-semibold text-xl text-[#1A3E6E]">
          {selectedNews.title}
        </h1>
        <p className="text-sm text-gray-500">
          {selectedNews.date} | {selectedNews.time}
        </p>
        <div className="overflow-y-auto max-h-[300px] pr-2 text-sm text-gray-700">
          {selectedNews.body}
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-start">
        {selectedNews.image ? (
          <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src={selectedNews.image}
              alt="news thumbnail"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-60 bg-gray-100 flex items-center justify-center rounded-xl text-gray-400 text-sm">
            No image available
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
