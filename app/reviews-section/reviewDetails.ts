import { StaticImageData } from "next/image";
import von from "../../public/von.webp";
import kamela from "../../public/kamela.webp";
import alexis from "../../public/alexis.webp";
import sandra from "../../public/sandra.webp";
import anna from "../../public/anna.webp";
import eldrix from "../../public/eldrix.webp";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Von Gani",
    role: "Business Owner",
    company: "Von Food Hub PH",
    profileImg: von,
    testimonial:
      "This may be a bit biased since the couple has been my friends for a long time, and they're also my partners, but I have to say they've been amazing. We've seen them make miracles with their talent!",
  },
  {
    name: "Kamela Alden",
    role: "Product Designer",
    company: "Terra Thread",
    profileImg: kamela,
    testimonial:
      "I recently collaborated with the WFH Couple, and it was an amazing experience. Their creativity and strategic insights really brought my designs to a broader audience. Their focus on content curation and audience engagement made all the difference in showcasing the product effectively.",
  },
  {
    name: "Alexis A",
    role: "Head of Engineering",
    company: "Mono",
    profileImg: alexis,
    testimonial:
      "I had the pleasure of collaborating with the them back in 2023, and it was such a great help. We met in Davao, had an amazing time working together, and they brought incredible visual design expertise to the project. Their creativity really elevated the final product. I truly wish we could collaborate again sometime :)!",
  },
  {
    name: "Eldrix Bueno",
    role: "Manager",
    company: "GVACO",
    profileImg: eldrix,
    testimonial:
      "SANA ALL! Highly recommended namin itong couple na to! Kakakolaborate lang namin recently, and it was a great experience . Kung naghahanap ka ng social media manager na expert graphics designer pa, huwag mo nang patagalin — hire this couple!",
  },
  {
    name: "Sandra Ruth Teodoro",
    role: "CEO & CoF",
    company: "WCDS AGENCY & Mizrach Digital",
    profileImg: sandra,
    testimonial:
      "We outsourced the WFH Couple to handle all of our digital marketing needs, and they were a game-changer. They took charge of content creation, strategy, and even helped streamline our entire online approach. Their all-in-one service made everything run smoothly",
  },  {
    name: "Anna Young",
    role: "Business Owner",
    company: "raisingbilingualchildren.com",
    profileImg: anna,
    testimonial:
      "I hired the WFH Couple to handle illustration, social media, and manage the website, and they’ve been fantastic. Their artistic talent really brought the visuals to life, and their strategic approach to social media has boosted our engagement. Plus, the website runs smoother than ever!",
  },
  
];
