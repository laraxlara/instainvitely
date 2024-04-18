import React from "react";
import Image from "next/image";

import wel1 from "../../public/images/wel1.png";
import wel2 from "../../public/images/wel2.jpg";

function Welcome() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 md:px-8 py-12 pt-24 mt-12">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-[#494949] sm:text-5xl md:mb-8 md:text-6xl">
            Welcome
          </h1>

          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Say goodbye to paper waste and hello to eco-friendly, interactive
            invitations that capture the essence of your event. Whether
            you&apos;re hosting a birthday bash, wedding, or corporate
            gathering, our customizable templates and user-friendly tools make
            it easy to craft the perfect invite that reflects your unique style.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 h-[500px] -ml-12 overflow-hidden bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={wel1}
              loading="lazy"
              alt="Photo by Kaung Htet"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="overflow-hidden bg-gray-100 shadow-lg h-[500px]">
            <Image
              src={wel2}
              loading="lazy"
              alt="Photo by Manny Moreno"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
