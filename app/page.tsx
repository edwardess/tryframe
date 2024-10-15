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

  // Send iframe height to parent window for dynamic resizing
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight; // Get the document height
      window.parent.postMessage({ iframeHeight: height }, '*'); // Send height to parent window
    };

    // Send height when the component is mounted and after resizing
    sendHeight();

    // Listen for any window resize event to update iframe height dynamically
    window.addEventListener('resize', sendHeight);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', sendHeight);
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
        <Reviews />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
