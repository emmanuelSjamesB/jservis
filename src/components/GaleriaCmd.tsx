import React from 'react';

const img1 = import.meta.env.VITE_IMAGEN1;
const img2 = import.meta.env.VITE_IMAGEN2;
const img3 = import.meta.env.VITE_IMAGEN3;
const img4 = import.meta.env.VITE_IMAGEN4;
const img5 = import.meta.env.VITE_IMAGEN5;
const img6 = import.meta.env.VITE_IMAGEN6;
const GaleriaCmd: React.FC = () => {
  return (
    <div className="container flex mx-auto px-5 py-2 lg:px-32 lg:pt-24 bg-black  min-w-full">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none"
          src={img5} />
      </div>
      <div className="w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none"
          src={img3} />
      </div>
      <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none"
          src= {img1} />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none"
          src={img4} />
      </div>
      <div className="w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none"
          src={img2} />
      </div>
      <div className="w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none"
          src={img6} />
      </div>
    </div>
  </div>
</div>
  );
};

export default GaleriaCmd;



