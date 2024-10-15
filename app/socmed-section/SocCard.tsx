import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const SocCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      style={{
        backgroundColor: "#74512D",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      }}
      className={`relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
      initial="initial"
      animate="animate"
    >
      {/* Show full image if 'available' is true */}
      {available ? (
        <div className="relative h-full w-full rounded-3xl overflow-hidden">
          {/* Adjust the image to maintain aspect ratio while fitting the parent container */}
          <Image
            src={image}
            alt="Coming Soon"
            fill
            style={{ objectFit: "contain" }} // Keep the aspect ratio and fit within container's height
            className="rounded-3xl" // Retain smooth border
          />

        </div>
      ) : (
        <>
          {/* Image: Stays at bottom with absolute positioning, wider width */}
          <Image
            src={image}
            onDragStart={(e) => e.preventDefault()} // Prevent dragging
            onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
            alt={name}
            className={`absolute bottom-0 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[65%] ${
              id % 2 === 0 ? "right-0" : "left-0"
            }`}
          />

          {/* Container for text content */}
          <div
            className={`absolute top-0 text-[#0E1016] ${
              id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
            } mt-6 flex items-center justify-center gap-2 lg:mt-10`}
          >
            <div className="flex items-center justify-center gap-2">
              <Link
                href={github}
                target="_blank"
                className="mt-1 rounded-full"
                aria-label="Open GitHub Repository"
              >
                <Image
                  src={technologies} // Use 'available' prop to load the custom logo
                  alt="Custom Logo"
                  className="w-[60px] rounded-full bg-white p-2 md:w-[65px] lg:w-[75px] object-cover"
                />
              </Link>
              <div className="rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px]">{demo}</h3>
              </div>
            </div>
          </div>

          {/* Adjusted Text Content with reduced `top` values */}
          <div
            className={`absolute text-white ${
              !(id % 2 === 0)
                ? "right-0 top-24 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-40 lg:mr-4 text-right"
                : "left-10 top-24 ml-0 md:mr-12 lg:top-40 lg:ml-4 text-left"
            } mb-10 md:mb-16 lg:mb-14`}
          >
            {/* Project Name */}
            <AnimatedTitle
              text={name}
              className={`text-[#F8F4E1] max-w-[90%] text-[30px] sm:text-[34px] md:text-[40px] leading-none text-white lg:max-w-[450px] lg:text-[44px] lg:leading-none ${
                id % 2 !== 0 ? "mr-8" : ""
              }`}
              wordSpace={"mr-[0.25em]"}
              charSpace={"-mr-[0.01em]"}
            />
            {/* Project Objective */}
            <AnimatedBody
              text="Objective"
              className={
                "mt-4 w-[90%] max-w-[457px] text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#F8F4E1]"
              }
            />
            {/* Project Description */}
            <AnimatedBody
              text={description}
              className={
                "mt-4 w-[90%] max-w-[457px] text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#F8F4E1]"
              }
            />
          </div>
        </>
      )}
    </motion.div>
  );
};

export default SocCard;
