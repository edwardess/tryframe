// components/SongCard.tsx

import Image from "next/image";
import Link from "next/link";

interface SongCardProps {
  title: string;
  artist: string;
  image: string;
  link: string;
}

const SongCard: React.FC<SongCardProps> = ({ title, artist, image, link }) => {
  return (
      <div className="relative flex h-80 w-80 items-center justify-center overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:scale-105 transition-transform duration-300">
        <Image
          src={image}
          alt={title}
          onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          data-blobity-tooltip={artist}
          data-blobity-invert="false"
        />
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-50 p-2 rounded">
          {/* <p className="text-sm text-white">{artist}</p> */}
          <h4 className="text-lg font-semibold text-white">{title}</h4>
        </div>
      </div>
  );
};

export default SongCard;
