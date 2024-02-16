import React from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from 'locomotive-scroll';

function LandingPage() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full h-screen bg-zinc-800 pt-1">
      <div className="w-full h-full">
        <div className='mt-[18vh] px-[8vw]'>
          {["Welcome to my", "Portfolio Website", "I am Yadubir."].map(
            (item, index) => (
              <div className="masker">
                <div className="flex items-center">
                  {index === 2 && (
                    <motion.div
                      key={index}
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.87, 0, 0.13, 1], duration: 1 }}
                      className="w-[9vw] h-[5vh]"
                    ></motion.div>
                  )}
                  <h1 key={index} className={`text-[5vw] uppercase tracking-tighter text-bold font-['FoundersGrotesk-Semibold'] ${index===2 && "text-[#C8E380]"}`}>
                    {item}
                  </h1>
                </div>
              </div>
            )
          )}
          {/* <h1>Welcome to my</h1>
                 <h1>Portfolio Website</h1>
                 <h2>I am <span>Yadubir.</span></h2> */}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default LandingPage;


