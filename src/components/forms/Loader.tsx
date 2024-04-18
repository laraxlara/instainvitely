import React from "react";

type Props = {};

function Loader({}: Props) {
  return (
    <div className="min-h-screen/2 gap-6 flex items-center justify-center">
      <div className="w-36 h-36 border-8 border-dashed rounded-full border-t-[#CDBAAA] animate-spin"></div>
    </div>
  );
}

export default Loader;
