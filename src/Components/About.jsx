import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { motion } from 'framer-motion'

function About() {
  return (
    <div 
    data-scroll
    data-scroll-section
    data-scroll-speed=".1"
    className="main w-full py-20 bg-[#C6A197] text-zinc-800 ">
      <div className=" flex justify-between"
      >
        <div className="w-[50vw] h-full">
          <div className="about">
            <h2 className='text-[3vw] font-["NeueMontreal-Regular"] pl-[8vw]'>
              Passionate and dedicated second-year student pursuing a career in
              web development. I possess a strong foundation in HTML, CSS, and
              JavaScript, along with expertise in ReactJS to create dynamic and
              responsive web applications.
            </h2>
          </div>
        </div>
        <div className="w-[50vw] h-full ">
          <div className="h-full relative">
            <div className='links text-[2vw] absolute left-[30%] font-["NeueMontreal-Regular"] pl-[8vw] flex flex-col items-center mt-[8vh]'>
              <a
                href="https://github.com/Yadubir"
                target="_blank"
                className="mb-[5vh]"
              >
                <button className="pl-[1vw] pr-[1vw] rounded-md hover:bg-[#a5847b] hover:text-zinc-950 hover:underline">
                  Github
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/yadubir-jha"
                target="_blank"
                className="mt-[5vh]"
              >
                <button className="pl-[1vw] pr-[1vw] rounded-md no-underline hover:bg-[#a5847b] hover:text-zinc-950 hover:underline">
                  LinkedIn
                </button>
              </a>
            </div>
            {/* <img src="https://i.ibb.co/7k3xV6f/IMG-20210723-131848.jpg" alt="Yadubir" className='w-[40vw] h-[40vw] rounded-full' /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
