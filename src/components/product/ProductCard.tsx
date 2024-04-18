import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import db from "@/libs/prismadb";

import invitation from "../../../public/images/diginv1.png";

import { Invitation } from "@prisma/client";

type Props = {
  key: number;
  name: string;
};

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/invitations/invitations");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Link href="#" className="group block overflow-hidden">
      <Image
        src={invitation}
        alt=""
        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />

      <div className="relative bg-white pt-3">
        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
          Digital Invitation
        </h3>
        {/* {products?.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
          </div>
        ))} */}

        <p className="mt-2">
          <span className="sr-only"> Regular Price </span>

          <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
