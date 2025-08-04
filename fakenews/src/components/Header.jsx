'use client';
import React from 'react';
import { PiCubeBold } from 'react-icons/pi';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex gap-2 text-xs h-fit">
      <h1 className="flex items-center gap-2 bg-white font-bold text-xl px-4 rounded-2xl">
        {/* <PiCubeBold size={14} /> */}
        <Image src={'/newsLogo.jpg'} alt="" width={50} height={30}></Image>
        FakeNews Detector
      </h1>
    </div>
  );
};

export default Header;
