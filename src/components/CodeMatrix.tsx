import React from 'react';

const generateColumns = () => {
  const numColumns = 80;
  const numRows = 10;

  return Array.from({ length: numColumns }, (_, n) => (
    <div key={n} className="column flex flex-col items-center">
      {Array.from({ length: numRows }, (_, i) => {
        const value = Math.random() > 0.5 ? '1' : '0';
        return (
          <span
            key={i}
            className={`text-green-500 text-lg animate-pulse transition-all duration-1000 delay-[${i * 20}ms]`}
            style={{
              animationDuration: `${Math.random() * 4 + 1}s`,
            }}
          >
            {value}
          </span>
        );
      })}
    </div>
  ));
};

const CodeMatrix: React.FC = () => {
  return (
    <div className="codematrix flex justify-center items-center min-h-screen w-full bg-black relative">
      <div className="absolute text-green-300 text-center uppercase font-bold 
                      text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full">
        REPARACION Y MANTENIMIENTO
      </div>
      <div className="flex space-x-1 z-0 w-full">
        {generateColumns()}
      </div>
    </div>
  );
};

export default CodeMatrix;



