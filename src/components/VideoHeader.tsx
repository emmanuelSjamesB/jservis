import React from 'react';
import video from '../assets/video.mp4';

const VideoHeader: React.FC = () => {
  return (
    <header className="relative flex items-center justify-center h-screen  overflow-hidden bg-black">
      <div className="relative z-30 p-5 text-3xl font-bold mb-8 text-black bg-purple-300 bg-opacity-50 rounded-xl">
        Reparación y optimización
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src={video} // Asegúrate de que esta ruta sea correcta
          type="video/mp4"
        />
      </video>
    </header>
  );
};

export default VideoHeader;
