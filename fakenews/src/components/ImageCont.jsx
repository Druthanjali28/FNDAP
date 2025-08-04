'use client';
import React from 'react';
import Image from 'next/image';

const ImageCont = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src={'/img.jpeg'} width={300} height={300} alt="" />
    </div>
  );
};

export default ImageCont;
