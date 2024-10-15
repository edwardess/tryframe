import { blogProps } from "./blogDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../globals.css";

const BlogCard = ({ title, image, url, date, available, index }: blogProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex h-[500px] w-[100%] max-w-[500px] flex-col items-center justify-start rounded-2xl bg-[#543310]"
    >
      <div className="mt-4 h-[100%] w-[90%] lg:mt-5 lg:w-[92%]">
        <div className="h-[65%] w-full md:h-[60%]">
          <Image
            src={image}
            alt={title}
            width={1600}
            height={900}
            className="h-full w-full rounded-lg bg-contain bg-center object-cover"
          />
        </div>

        <h3 className="mt-3 leading-relaxed tracking-wide text-[16px] md:text-[18px] lg:text-[20px] leading-[1.2em] tracking-tight line-clamp-4 text-[#F8F4E1] break-words">
          {title}
        </h3>
      </div>

      <div className="absolute bottom-0 mb-5 flex w-[90%] items-center justify-between text-[16px] font-bold text-[#F8F4E1]">
        {available ? (
          <>
            <p>{date}</p>
            <Link
              href={url}
              target="_blank"
              className="rounded-full"
              aria-label="Open Blog Post"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-[20px] rounded-full bg-[#0E1016] p-3 text-[16px] text-[#F8F4E1] md:w-[24px] md:text-[20px] lg:w-[24px] lg:p-4 lg:text-[22px]"
                data-blobity
                data-blobity-radius="30"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="false"
              />
            </Link>
          </>
        ) : (
          <>
            <p>Coming soon</p>
            <div className="mb-10 md:mb-14"></div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default BlogCard;
