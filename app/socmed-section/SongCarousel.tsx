import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";
import "./animate.css";

const SongCarousel = () => {
  return (
    <div className="relative flex overflow-hidden">
      <div className="flex gap-4 animate-carousel">
        {songs.map((song: SongProps, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
        {songs.map((song: SongProps, index) => (
          <SongCard
            key={index + songs.length} // Unique key for the second batch
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SongCarousel;
