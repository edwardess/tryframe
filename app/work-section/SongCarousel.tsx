// components/SongCarousel.tsx

import React from "react";
import Slider from "react-slick";
import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../animations/animate.css"; // Your custom animations if any

interface SongCarouselProps {
  projectId: number;
}

const SongCarousel: React.FC<SongCarouselProps> = ({ projectId }) => {
  const projectSongs = songs.filter((song) => song.projectId === projectId);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-6">
      <Slider {...settings}>
        {projectSongs.map((song: SongProps, index) => (
          <div key={index} className="flex justify-between"> {/* Use justify-between */}
            <SongCard
              title={song.title}
              artist={song.artist}
              image={song.image}
              link={song.link}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SongCarousel;
