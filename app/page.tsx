"use client";
import Hero from "./hero-section/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./navbar/NavBar";

import dynamic from "next/dynamic";
import Reviews from "./reviews-section/ReviewGrid";
const Work = dynamic(() => import("./work-section/Work"));
const Soc = dynamic(() => import("./socmed-section/Soc"));
const About = dynamic(() => import("./about-section/About"));
const Blog = dynamic(() => import("./blog-section/BlogGrid"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

 useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    // Scroll event handler
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      window.parent.postMessage({ scrollTop: scrollTop }, 'https://edwardecreatives.systeme.io/a9324ca9?preview=c831b8eb17190dd35679f5bdd1d2068b'); // Update with the actual parent URL
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup by removing the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <PreLoader />

      <NavBar />

      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Work />
        <Soc />
        <Reviews/>
        <About />
        <Blog />
        <Contact />
        <Footer />
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
