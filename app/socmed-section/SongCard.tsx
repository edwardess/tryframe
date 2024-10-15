import Image from "next/image";
import { SongProps } from "./songDetails";

const SongCard = ({ title, artist, image }: SongProps) => {
  return (
    <div className="relative flex h-[150px] w-[175px] sm:h-[160px] sm:w-[190px] md:h-[175px] md:w-[200px] lg:h-[190px] lg:w-[215px] items-center justify-center overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover rounded-xl"
        onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
      />

    </div>
  );
};

export default SongCard;
