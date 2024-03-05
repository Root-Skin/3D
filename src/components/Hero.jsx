import { motion } from "framer-motion";
import { TypingText } from "../components";
import { About } from "../components";
import { StarsCanvas } from "../components";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypeAnimation } from "react-type-animation";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <Parallax pages={1.5}>
        <ParallaxLayer speed={1}>
          <div
            className={`${styles.paddingX} absolute 
      inset-0 top-[120px]  flex flex-row items-start gap-5 mx-auto `}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <h1 className={`${styles.heroHeadText} text-white `}>
                Hi , I'm
                <br></br>
                <TypeAnimation
                  className="text-[#915eff]"
                  sequence={[
                    "Skin",
                    1000,
                    "Web Developer",
                    1000,
                    "Mobile Developer",
                    1000,
                    "UI/UX Designer",
                    1000,
                  ]}
                  // wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </h1>

              <TypingText
                title="I develop 3D visuals ,user *interface and web applications "
                textStyles=" mt-10 text-[30px]"
              />
              {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals ,user
            <br className="sm:block hidden" />
            interface and web applications
          </p> */}
            </motion.div>
          </div>

          {/* <div
            className="absolute xs:bottom-10  bottom-32
      w-full flex justify-center items-center"
          >
            <a href="#about">
              <div
                className="w-[35px] h-[64px] 
          rounded-3xl border-4 border-secondary 
          flex justify-center items-start p-2"
              >
                <motion.dev
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div> */}

          <ComputersCanvas />
        </ParallaxLayer>
        <ParallaxLayer speed={0.65} offset={0.79}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};

export default Hero;
