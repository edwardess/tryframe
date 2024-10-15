"use client";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[18px] sm:gap-[10px] sm:text-[22px] md:text-[26px] lg:text-[30px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[18px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[22px] md:text-[26px] lg:text-[30px]">
        <span>Where strategy,</span>
        <span>meets creativity</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
