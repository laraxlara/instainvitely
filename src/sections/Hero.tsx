import React from "react";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <section className="relative h-[280px] sm:h-[400px] md:h-[700px] lg:h-[780px] top-28 md:top-0 flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={"hero video.mp4"}
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="relative z-10 py-6 sm:py-8 lg:py-12 w-full">
          <div className="max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col items-start text-start w-2/3 sm:w-1/2 pt-24">
              <p className="mb-4 font-semibold text-[#62564B] md:mb-6 md:text-lg xl:text-xl">
                FROM CLICK TO CELEBRATION
              </p>
              <h1 className="mb-8 text-4xl font-bold text-[#494949] sm:text-4xl md:mb-12 md:text-7xl">
                InstaInvitely redifines digital invitations
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
