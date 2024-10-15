import { faLink } from "@fortawesome/free-solid-svg-icons";
import { ProjectProps } from "./projectDetails";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  demo,
  image,
  logo, // logo prop now included
  available,
}: ProjectProps) => {
  return (
    <motion.div
      style={{
        backgroundColor: "#74512D", // Light brown background
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      } as React.CSSProperties}
      className={`relative z-10 h-auto md:h-[720px] w-full flex flex-col md:flex-row md:items-stretch justify-between overflow-hidden rounded-3xl p-8`}
      initial="initial"
      animate="animate"
    >
      {/* Text Column: First Column for Odd id, Second Column for Even id */}
      <div
        className={`flex-1 flex flex-col justify-between text-[#F8F4E1] mt-10 md:mt-0 ${
          id % 2 === 0 ? 'md:order-1 md:mr-8' : 'md:order-2 md:ml-8'
        } mx-auto lg:max-w-[1024px]`}
      >
        {/* Sub-container for logo and Coming Soon (Top section) */}
        <div className="flex items-center gap-4">
          {/* Logo Image */}
          <div className="rounded-full">
            <Image
              src={logo} // Replacing GitHub icon with logo image
              alt={`${name} logo`}
              width={60} // Set the width of the logo
              height={60} // Set the height of the logo
              className="rounded-full object-cover" // Styling the logo with rounded corners
              data-blobity
              data-blobity-radius="38"
              data-blobity-offset-x="4"
              data-blobity-offset-y="4"
              data-blobity-magnetic="true"
            />
          </div>

          <div className="rounded-xl bg-[#F8F4E1] px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-[#0E1016]">
              {demo}
            </h3>
          </div>
        </div>

        {/* Title and Subtitle (Middle section) */}
        <div className="flex flex-col justify-center items-start">
          <AnimatedTitle
            text={name}
            className={
              "max-w-[90%] text-[36px] leading-none text-[#F8F4E1] md:text-[40px] md:leading-none lg:max-w-[450px] lg:text-[44px] lg:leading-none"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"-mr-[0.01em]"}
          />
          <AnimatedBody
            text={description}
            className={
              "mt-4 w-[90%] max-w-[457px] text-[14px] font-semibold text-[#F8F4E1] md:text-[16px]"
            }
          />
        </div>

        {/* Technologies (Bottom section) */}
        <div className="flex gap-4 justify-start items-center">
          {technologies.map((tech, id) => (
            <AnimatedTitle
              text={tech}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              key={id}
              className={
                "text-[12px] font-bold uppercase text-[#F8F4E1] md:text-[14px] lg:text-[16px]"
              }
            />
          ))}
        </div>
      </div>

      {/* Image Column remains untouched */}
      <div
        className={`flex-1 flex items-center justify-center md:w-[700px] ${
          id % 2 === 0 ? 'md:order-2' : 'md:order-1'
        } h-full`}
      >
        <Image
          src={image}
          alt={name}
          onDragStart={(e) => e.preventDefault()} // Prevent dragging
          onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
          className={`object-cover w-full h-full rounded-lg shadow-lg`} // Ensures image fully covers the container
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
