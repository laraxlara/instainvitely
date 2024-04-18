import React, { useState } from "react";
import { Sublinks, links } from "./NavbarLinks";
import Link from "next/link";

interface Props {
  isNavbarOpen: boolean;
}

function Navbar(props: Props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <nav
      aria-label="Global"
      className="w-full flex justify-center items-center py-4 bg-white"
    >
      <ul className="hidden lg:flex items-center text-center gap-12 text-xl">
        {links.map((link) => (
          <>
            <li key={link.id} className="group text-sm uppercase">
              <Link href={link.url}>{link.title}</Link>
            </li>
          </>
        ))}
      </ul>

      <ul
        className={`${
          props.isNavbarOpen ? "flex" : "hidden"
        } w-full h-full flex-col items-start text-start gap-12 text-xl p-4 shadow-xl`}
      >
        {links.map((link) => (
          <>
            <li key={link.id} className="group text-sm">
              <Link href="/">{link.title}</Link>
            </li>
          </>
        ))}
        <li className="flex">
          <Link className="block lg:inline-block lg:mt-0" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-facebook"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </Link>
          <Link className="block lg:inline-block lg:mt-0" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-pinterest"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 20l4 -9" />
              <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            </svg>
          </Link>
          <Link className="block lg:inline-block lg:mt-0" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
