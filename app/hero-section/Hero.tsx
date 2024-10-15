import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { monaSans } from "../fonts/monaSans";
import { impactFont, greatFont } from "../fonts/impactSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import AnimatedWords3 from "../animations/AnimatedWords3";
import profile from "../../public/profile.webp";
import profile2 from "../../public/profile2.webp";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-center justify-between bg-[url('.//../public/hero2.webp')] bg-cover bg-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      {/* Container for Book a Call and Social Icons */}
      <div className="absolute top-10 flex justify-between w-full px-10">
        {/* Left: Book a Call Button */}
        <Link
          href="https://cal.com/wfhcouple/30minutes"
          target="_blank"
          aria-label="BOOK A CALL"
        >
          <motion.button
            className="rounded-md border-2 border-[#F8F4E1] py-2 px-6 text-[16px] font-semibold text-[#F8F4E1]"
            variants={bodyAnimation}
          >
            BOOK A CALL
          </motion.button>
        </Link>

        {/* Right: Social Media Icons */}
        <div className="flex items-center space-x-6">
          
          <Link
            href="https://facebook.com/wfhcouple"
            target="_blank"
            aria-label="View Facebook Profile"
          >          
            <motion.div className="text-[32px] text-[#F8F4E1]" variants={imageAnimation}            
              data-blobity

              data-blobity-offset-x="6"
              data-blobity-offset-y="6"
              data-blobity-magnetic="true">
              <FontAwesomeIcon icon={faFacebook} />
            </motion.div>
          </Link>


          <Link
            href="https://facebook.com/wfhcouple"
            target="_blank"
            aria-label="View Instagram Profile"
          >
            <motion.div className="text-[32px] text-[#F8F4E1]" variants={imageAnimation}
                          data-blobity

                          data-blobity-offset-x="6"
                          data-blobity-offset-y="6"
                          data-blobity-magnetic="true"
            
            >
              <FontAwesomeIcon icon={faInstagram} />
            </motion.div>
          </Link>

        </div>
      </div>

      {/* Rest of the content */}
      <div className="flex justify-between w-full px-10">
        {/* Left Image and Text */}
        <div className="flex flex-col items-center flex-1">
          <motion.div
            className="relative flex items-center justify-center"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
              priority
              alt="Victor's headshot"
              data-blobity-tooltip="Netflix navigator"
              data-blobity-invert="false"
              className="w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
          <motion.div
            className="relative flex items-center justify-center"
            variants={imageAnimation}
          >
            <p className="z-50 text-center text-[16px] font-medium text-[#F8F4E1] md:text-[20px] mt-2">
              Edward
            </p>
          </motion.div>
        </div>

        {/* Center Text: Different Component for Mobile */}
        <div className="flex flex-col items-center justify-center flex-1">
          {/* Desktop View */}
          <div
            className={`hidden sm:flex relative flex-col items-center justify-center ${impactFont.className} w-auto text-center`}
          >
            <AnimatedWords
              title="WFH"
              style="inline-block overflow-visible pt-1"
            />
          </div>
          <div
            className={`hidden sm:flex relative flex-col items-center justify-center ${greatFont.className} w-auto text-center`}
          >
            <AnimatedWords3
              title="Couple"
              style="inline-block overflow-visible pt-1 text-[#F8F4E1]"
            />
          </div>

          {/* Mobile View */}
          <div className="flex sm:hidden flex-col items-center justify-center">
            <motion.div
              className="text-[30px] font-semibold text-[#F8F4E1] text-center"
              variants={imageAnimation}
            >
              WFH
            </motion.div>
            <motion.div
              className="text-[30px] font-semibold text-[#F8F4E1] text-center"
              variants={imageAnimation}
            >
              Couple
            </motion.div>
          </div>

          {/* New Text: Social Media Manager Duo */}
          <div
            className={`relative flex flex-col items-center justify-center ${monaSans.className} w-auto text-center`}
          >
            <motion.div
              className="relative flex items-center justify-center"
              variants={imageAnimation}
            >
              <motion.p className="text-[24px] sm:text-[30px] font-medium text-[#F8F4E1] mt-5">
                Social Media Manager Duo
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Right Image and Text */}
        <div className="flex flex-col items-center flex-1">
          <motion.div
            className="relative flex items-center justify-center"
            variants={imageAnimation}
          >
            <Image
              src={profile2}
              onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
              priority
              alt="Victor's headshot"
              data-blobity-tooltip="Spaghetti muncher"
              data-blobity-invert="false"
              className="w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            variants={imageAnimation}
          >
            <p className="text-right text-[16px] font-semibold text-[#F8F4E1] md:text-[20px] mt-2">
              Amrena
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
