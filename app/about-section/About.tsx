import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import NewAnimatedBody from "../animations/NewAnimatedBody";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#F8F4E1] pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle 
          text={
            "WE MAKE BRANDS BEAUTIFUL, BUILD COMMUNITIES, CRAFT STRATEGIES, AND DESIGN STUNNING VISUALS."
          }
          className={
            "mb-10 text-left text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#543310] sm:text-[35px] md:mb-16 md:text-[50px] lg:text-[65px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#543310] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "We are a creative powerhouse driven by our passion for stunning visuals, emotion-filled content, and strategic implementation. As a team, we combine our expertise in social media marketing, management, strategy, and graphic design to deliver captivating campaigns that resonate with audiences and amplify brand stories."
              }
            />
            <NewAnimatedBody
              text={
                <>
                  Though we are two, <span style={{ fontWeight: 'bold', color: '#FF5733' }}>we act as one—offering the power of a full team while maintaining the same service price as a solo professional.</span> This allows us to deliver seamless, impactful results without compromising on quality or cost.
                </>
              }
            />

            <AnimatedBody
              text={
                "Our focus is on crafting experiences that not only look beautiful but also evoke real emotions and meaningful connections. We love creating content that leaves a lasting impression and moves the needle for your brand’s growth."
              }
            />
            <AnimatedBody
              text={
                "Fun fact: We love watching K-dramas and NBA games together. We’re also big fans of spicy food—it’s our go-to after a long day of brainstorming creative ideas."
              }
            />
            <AnimatedBody
              text={
                "We believe in the power of creativity and strategy, and we can’t wait to bring that energy to your brand. Let’s make something amazing!"
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#543310]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Social Media Tools"}
                className={
                  "text-[24px] text-[#543310] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Meta Business Suite, Instagram Insights, YouTube Studio, Meta Ads Manager, Google Analytics 4, Hootsuite, Buffer, Sprout Social, Canva Pro, Adobe Creative Cloud, Trello, Tubebuddy, Repurpose.io."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Content Creation & Design Tools"}
                className={
                  "text-[24px] text-[#543310] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Figma, Canva, Lightroom, After Effects, Filmora."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Social Media Strategy & Management Tools"}
                className={
                  "text-[24px] text-[#543310] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "HubSpot CRM, Trello, Airtable, SEMrush, BuzzSumo."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Latest Technologies"}
                className={
                  "text-[24px] text-[#543310] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript (ES6+), React, Next.js, ChatGPT, Grammarly AI, Canva AI, Pictory AI, DALL·E, Rytr"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
