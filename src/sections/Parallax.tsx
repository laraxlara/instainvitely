import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import React from "react";

type Props = {};

function Parallax({}: Props) {
  return (
    <section className="flex items-center justify-center h-[600px] mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="p-5 text-2xl text-white rounded-xl w-1/4">
        {/* <ButtonOutlined type="submit" label="SHOP NOW" /> */}
      </div>
    </section>
  );
}

export default Parallax;
