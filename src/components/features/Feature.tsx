import React, { ReactNode } from "react";

type Props = {
  key: string | number | null;
  title: string;
  text: string;
  svgCode: ReactNode;
};

function Feature(props: Props) {
  return (
    <div className="mb-12 md:mb-0" key={props.key}>
      <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
        {props.svgCode}
      </div>
      <h3 className="mb-4 text-lg font-bold">{props.title}</h3>
      <p className="text-[#626262] px-6 leading-loose">{props.text}</p>
    </div>
  );
}

export default Feature;
