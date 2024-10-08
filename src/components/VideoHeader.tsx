import React from 'react';
import video from '../assets/video.mp4';

const VideoHeader: React.FC = () => {
  return (
    <header className="relative flex items-center justify-center h-screen overflow-hidden bg-black w-full">
      <div className="relative z-10 p-5 text-3xl font-bold mb-8 text-center text-black bg-purple-300 bg-opacity-50 rounded-xl">
        Reparación y optimización
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>
    </header>
  );
};

export default VideoHeader;

