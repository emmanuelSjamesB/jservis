import React from 'react';


const GaleriaCmd: React.FC = () => {
  return (
    <div className="container flex mx-auto px-5 py-2 lg:px-32 lg:pt-24 bg-black  min-w-full">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src='./src/assets/3.jpg' />
      </div>
      <div className="w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src='./src/assets/pc1.jpg' />
      </div>
      <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src='./src/assets/r1.jpg' />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src='./src/assets/pc2.jpg' />
      </div>
      <div className="w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src='./src/assets/r2.jpg' />
      </div>
      <div className="w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src='./src/assets/back.jpg' />
      </div>
    </div>
  </div>
</div>
  );
};

export default GaleriaCmd;



