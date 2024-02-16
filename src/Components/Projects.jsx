import React from "react";
import LocomotiveScroll from "locomotive-scroll";

const Projects = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-16"
    >
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-16">
        <h1 className='text-6xl font-["NeueMontreal-Regular"] tracking-tight text-center'>
          My Projects
        </h1>
      </div>
      <div className="w-full py-10 flex">
        <h1 className="text-[3vw] absolute left-[15%] leading-none tracking-tighter font-bold">
          News App
        </h1>
        <h1 className="text-[3vw] absolute left-[70%] leading-none tracking-tighter font-bold">
          ToDo List
        </h1>
      </div>
      <div className="cards w-full flex gap-10 mt-10">
        <div className="cardcontainer w-1/2 h-[75vh] ">
          {/* <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] leading-none tracking-tighter text-7xl font-bold ">FYDE</h1> */}
          {/* <h1 className='text-[3vw] text-zinc-800 absolute left-[30%] leading-none tracking-tighter font-bold'>News App</h1> */}
          <div className="card w-full h-full rounded-2xl overflow-hidden">
            <img
              className="w-full h-full bg-cover transition duration-300 ease-in-out hover:scale-110"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt=""
            />
          </div>
          <div className="w-full relative py-3">
            <button className=" text-lg absolute left-[15vw]  rounded-full overflow-hidden py-1 px-5">
              Source Code
            </button>
          </div>
        </div>
        <div className="cardcontainer relative w-1/2 h-[75vh] ">
          {/* <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] leading-none tracking-tighter text-7xl font-bold ">VISE</h1> */}
          {/* <h1 className='text-[3vw] absolute right-[30%] leading-none tracking-tighter font-bold'>ToDo List</h1> */}
          <div className="card w-full h-full rounded-2xl overflow-hidden">
            <img
              className="w-full h-full bg-cover transition duration-300 ease-in-out hover:scale-110"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
              alt=""
            />
          </div>
          <div className="w-full relative py-3">
            <button className=" text-lg absolute left-[20vw] rounded-full overflow-hidden">
              Source Code
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-zinc-700 pb-[20vh]"></div>
    </div>
  );
};

export default Projects;
