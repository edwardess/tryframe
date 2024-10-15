export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  logo: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Terra Thread",
    description:
      "Terra Thread is a brand dedicated to creating eco-friendly backpacks, bags, and apparel for conscious consumers, corporations, and NGOs. With a focus on sustainability, Terra Thread ensures that every step, from organic farms to the final product, prioritizes both people and the planet, making a positive impact with every purchase.",
    technologies: ["Fashion", "Apparel", "E-Commerce"],
    github: "https://github.com/victorcodess/synthetix",
    demo: "Branding #1",
    image: require(".//../../public/projects/terra.gif"),
    logo: require(".//../../public/projects/terralogo.webp"),
    available: true,
  },
  {
    id: 1,
    name: "Tech A Break Davao",
    description:
      "Tech A Break is a cutting-edge technology hub that combines quality and affordability, offering a comprehensive range of high-performance computer components and gadgets for tech enthusiasts, gamers, and professionals alike. With a strong commitment to exceptional customer service and unbeatable pricing, Tech A Break strives to become Davaos premier destination for gaming PCs and innovative tech solutions.",
    technologies: ["Technology", "Gaming", "E-commerce"],
    github: "https://github.com/victorcodess/odunsi-web3-folio",
    demo: "Branding #2",
    image: require(".//../../public/projects/techbreak.webp"),
    logo: require(".//../../public/projects/techabreaklogo.webp"),
    available: true,
  },
  {
    id: 2,
    name: "Jameelah Home Owners Association",
    description:
      "Jameelah Home Owners Associations specializes in providing comfortable, affordable, and secure housing solutions in well-planned subdivisions. Catering to families and individuals looking for a perfect place to call home, Jameelah offers a range of residential properties that blend modern design with community-centric living. Their commitment to quality construction, community engagement, and long-term value positions them as a trusted name in real estate.",
    technologies: ["Real Estate", "Construction", "Architecture"],
    github: "https://github.com/victorcodess/interlock",
    demo: "Branding #3",
    image: require(".//../../public/projects/jameelah.webp"),
    logo: require(".//../../public/projects/jameelahlogo.webp"),
    available: true,
  },

  // {
  //   id: 3,
  //   name: "Propellent",
  //   description:
  //     "A website built for a software startup and small business, to showcase their services and mark their online presence.",
  //   technologies: ["React", "Tailwind CSS", "Framer Motion"],
  //   github: "https://github.com/victorcodess/propellent",
  //   demo: "https://propellent.vercel.app/",
  //   image: require(".//../../public/projects/propellent-new.png"),
  //   logo: require(".//../../public/projects/techbreak.webp"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Flixify",
  //   description:
  //     "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
  //   technologies: ["Next.js", "Typescript", "Prisma"],
  //   github: "https://github.com/victorcodess/flixify",
  //   demo: "https://flixify.victorwilliams.me/",
  //   image: require(".//../../public/projects/flixify.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
