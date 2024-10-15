export interface SongProps {
  title: string;
  artist: string;
  image: string;
  link: string;
  projectId: number;
}

export const songs: SongProps[] = [
  // Songs for project id 0
  {
    title: "Terra Thread",
    artist: "Tag",
    image: require(".//../../public/songs/terra0.webp"),
    link: "https://spotify.com/song1",
    projectId: 0,
  },
  {
    title: "Terra Thread",
    artist: "Wall logo",
    image: require(".//../../public/songs/terra1.webp"),
    link: "https://spotify.com/song2",
    projectId: 0,
  },
  {
    title: "Terra Thread",
    artist: "Terra Shop",
    image: require(".//../../public/songs/terra2.webp"),
    link: "https://spotify.com/song2",
    projectId: 0,
  },
  {
    title: "Terra Thread",
    artist: "T-shirt",
    image: require(".//../../public/songs/terra3.webp"),
    link: "https://spotify.com/song2",
    projectId: 0,
  },
  {
    title: "Terra Thread",
    artist: "Booklet",
    image: require(".//../../public/songs/terra4.webp"),
    link: "https://spotify.com/song2",
    projectId: 0,
  },
  {
    title: "Terra Thread",
    artist: "Price Tag",
    image: require(".//../../public/songs/terra5.webp"),
    link: "https://spotify.com/song2",
    projectId: 0,
  },
  {
    title: "Tech A Break",
    artist: "Logo",
    image: require(".//../../public/songs/1tech.webp"),
    link: "https://spotify.com/song1",
    projectId: 1,
  },
  {
    title: "Tech A Break",
    artist: "Packaging",
    image: require(".//../../public/songs/2tech.webp"),
    link: "https://spotify.com/song2",
    projectId: 1,
  },
  {
    title: "Tech A Break",
    artist: "Digital",
    image: require(".//../../public/songs/3tech.webp"),
    link: "https://spotify.com/song2",
    projectId: 1,
  },
  {
    title: "Tech A Break",
    artist: "Product",
    image: require(".//../../public/songs/4tech.webp"),
    link: "https://spotify.com/song2",
    projectId: 1,
  },
  // Songs for project id 1
  {
    title: "Jameelah",
    artist: "Business Card",
    image: require(".//../../public/songs/jam1.webp"),
    link: "https://spotify.com/song3",
    projectId: 2,
  },
  {
    title: "Jameelah",
    artist: "Business Card",
    image: require(".//../../public/songs/jam2.webp"),
    link: "https://spotify.com/song4",
    projectId: 2,
  },
  {
    title: "Jameelah",
    artist: "Jameelah Building",
    image: require(".//../../public/songs/jam3.webp"),
    link: "https://spotify.com/song4",
    projectId: 2,
  },
  {
    title: "Jameelah",
    artist: "Jameelah Branch",
    image: require(".//../../public/songs/jam4.webp"),
    link: "https://spotify.com/song4",
    projectId: 2,
  },
  // Add more songs for other project IDs
];
