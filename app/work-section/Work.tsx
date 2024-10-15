import AnimatedBody from "../animations/AnimatedBody";
import AnimatedWords2 from "../animations/AnimatedWords2";
import ProjectGrid from "./ProjectGrid";
import { monaSans } from "../fonts/monaSans";

const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#F8F4E1] bg-cover bg-center py-16 md:py-20 lg:py-20" // Set background color to #F8F4E1
      id="work"
    >
<div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"BRANDING"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#543310] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody 
          text="Explore our approach to crafting standout brands. Here are some of our favorite projects."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px] text-[#543310]"
        />
      </div>
      <ProjectGrid />
    </section>
  );
};

export default Work;
