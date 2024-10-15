import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedWords3Props = {
  title: string;
  style: string;
};

const AnimatedWords3: React.FC<AnimatedWords3Props> = ({ title, style }) => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("animate");
    }
    if (!inView) {
      ctrls.start("initial");
    }
  }, [ctrls, inView]);

  const wordAnimation3 = {
    initial: {
      opacity: 0,
      y: 100,  // Reduced downward movement
    },
    animate: {
      opacity: 1,
      y: -20,  // Move slightly upward
      transition: {
        delay: 6,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1,
      },
    },
  };

  return (
    <h1 aria-label={title} role="heading">
      <motion.span
        ref={ref}
        className="flex w-auto flex-col overflow-visible text-center text-[96px] font-extrabold leading-[0.8em] text-[#e4ded7] sm:text-[120px] sm:leading-[0.85em] md:text-[155.5px] lg:text-[215px] -mt-10"
      >
        {title.split(" ").map((word, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate={ctrls}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className="flex items-center justify-center overflow-visible"
          >
            <motion.span className={style} variants={wordAnimation3}>
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimatedWords3;
