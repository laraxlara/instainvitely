import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ButtonOutlined from "../buttons/ButtonOutlined";
import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string | StaticImport;
  name: string;
  price: number;
};

const Card = (props: Props) => {
  return (
    <li>
      <Link
        href="#"
        className="group block overflow-hidden text-center bg-white "
      >
        <Image
          src={props.src}
          alt="Featured Digital Invite"
          className="h-64 w-full object-cover sm:h-80 lg:h-full"
        />
        <h3 className="font-bold text-md text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {props.name}
        </h3>

        <p className="font-bold text-md text-gray-700 pb-4">
          {props.price} &#x20AC;
        </p>
      </Link>
      <ButtonOutlined label="SHOP NOW" />
    </li>
  );
};

export default Card;
