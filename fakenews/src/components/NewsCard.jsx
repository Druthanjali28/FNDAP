'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ image, title, url, source, sentiment }) => {
  return (
    <Link href={'#'}>
      <div
        className={`relative p-[1px] rounded-xl bg-gradient-to-tl  h-full ${
          sentiment ? 'from-red-500 to-red-600' : 'from-green-400 to-green-600'
        } `}
      >
        <div
          className={`relative flex flex-col h-full gap-3 justify-between bg-white shadow-sm rounded-xl p-4`}
        >
          <h1 className="font-medium ">{title}</h1>
          <Image
            src={image || '/img.jpeg'}
            height={300}
            width={300}
            alt="No Image Found"
            className="rounded-lg max-h-[200px] min-h-[200px] min-w-full max-w-full"
          />
          <h4 className="text-gray-400 text-sm">Source: {source.title}</h4>
          <span
            className={`${
              sentiment === 1 ? 'bg-red-500' : 'bg-green-400'
            } h-fit w-fit px-2 rounded-full absolute right-8 -top-3 text-white`}
          >
            {!sentiment ? 'Verified' : 'Alleged'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
