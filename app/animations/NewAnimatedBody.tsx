// NewAnimatedBody.tsx
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type NewAnimatedBodyProps = {
  text: React.ReactNode;  // Accept ReactNode for rich content
  className?: string;
};

const NewAnimatedBody = ({
  text,
  className,
}: NewAnimatedBodyProps) => {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const bodyAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.1,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.p
      className={className}
      ref={ref}
      initial="hidden"
      animate={ctrls}
      variants={bodyAnimation}
    >
      {text}
    </motion.p>
  );
};

export default NewAnimatedBody; // Ensure it's a default export
