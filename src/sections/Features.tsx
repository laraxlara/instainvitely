import React from "react";
import Feature from "@/components/features/Feature";
import { features, FeatureInterface } from "../components/features/Features";

function Features(feature: FeatureInterface) {
  let svgCode;

  return (
    <section className="text-center bg-[#E6DCD5] h-full md:h-[600px] text-[#626262]">
      <div className="max-w-screen-xl mx-auto grid gap-x-6 md:grid-cols-3 lg:gap-x-2 h-full place-items-center px-2">
        {features.map((feature) => {
          switch (feature.id) {
            case 1:
              svgCode = (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="134"
                  height="134"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-palette"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
              );
              break;
            case 2:
              svgCode = (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="134"
                  height="134"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-share"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M8.7 10.7l6.6 -3.4" />
                  <path d="M8.7 13.3l6.6 3.4" />
                </svg>
              );
              break;
            case 3:
              svgCode = (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="134"
                  height="134"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-download"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 11l5 5l5 -5" />
                  <path d="M12 4l0 12" />
                </svg>
              );
              break;
            default:
              svgCode = null;
              break;
          }

          return (
            <Feature
              key={feature.id}
              title={feature.name}
              text={feature.description}
              svgCode={svgCode}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Features;
