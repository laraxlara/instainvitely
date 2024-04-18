import React from "react";
import Banner from "@/components/featured/Banner";
import Card from "@/components/featured/Card";
import diginv from "../../public/images/diginv1.png";

type Props = {};

const FeaturedProducts = (props: Props) => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <h3 className="text-center text-5xl text-[#494949] py-12 pt-24">
        Featured Products
      </h3>
      <ul className="grid gap-12 mt-8 sm:grid-cols-2 lg:grid-cols-4 py-4 px-24 md:px-6 my-12">
        <Card src={diginv} name="Digital Invite" price={10} />
        <Card src={diginv} name="Digital Invite" price={10} />
        <Card src={diginv} name="Digital Invite" price={10} />
        <Card src={diginv} name="Digital Invite" price={10} />
      </ul>
    </section>
  );
};

export default FeaturedProducts;
