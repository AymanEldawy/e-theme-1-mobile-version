import React from 'react';
import Image from 'next/image';

export const WinterCollectionBanner = () => {
  return (
    <div className="mt-12">
      <div className=" container relative">
        <Image
          src="/images/home/winter-collection.png"
          alt="Winter Collection"
          height={278}
          width={1203}
        />
        <div className="winter-backdrop text-white absolute w-full flex items-center justify-center flex-col max-w-3xl h-full top-0 left-1/2 -translate-x-1/2 ">
          <h2 className="text-5xl mb-3 text-center">
            Winter <span className="block mt-1">Collection</span>{' '}
          </h2>
          <button className="text-primary bg-transparent text-2xl">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};
