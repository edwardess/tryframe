import AnimatedBody from "../animations/AnimatedBody";
import AnimatedWords2 from "../animations/AnimatedWords2";
import SocGrid from "./SocGrid";
import { monaSans } from "../fonts/monaSans";
import SongCarousel from "./SongCarousel";

const Soc = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#F8F4E1] bg-cover bg-center pt-10 pb-20 md:pt-14 md:pb-28 lg:pt-16 lg:pb-32"
      id="work"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1440px]">
        {/* Section Title */}
        <div
          className={`relative mb-8 flex w-full flex-col items-center justify-center gap-6 text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
        >
          <AnimatedWords2
            title={"SOCIAL MEDIA MANAGEMENT"}
            style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#543310] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(50px,10vw,120px)]`}
          />

          <AnimatedBody
            text="Mastering the game of social media—strategy-driven, results-focused."
            className="w-[90%] text-center text-[14px] font-semibold uppercase text-[#543310] sm:w-[500px] md:w-[550px] md:text-[16px]"
          />
        </div>

        {/* Main Grid - SocGrid */}
        <SocGrid />

        {/* Text Above the Carousel */}
        <div className="mt-8 mb-4">
          <AnimatedBody
            text="Here are some of our favorite social media posts"
            className="w-[90%] text-center text-[14px] font-semibold uppercase text-[#543310] sm:w-[500px] md:w-[550px] md:text-[16px]"
          />
        </div>

        {/* Song Carousel Section */}
        <div className="mt-4">
          <SongCarousel />
        </div>
      </div>
    </section>
  );
};

export default Soc;
