import { navIcons } from "@/constants/constants";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full py-4">
      <section className="px-5 sm:px-16 mx-auto   flex justify-between items-center">
      <div>
        <Image
        src="/logo.png"
        alt="logo"
        width={300}
        height={300}
        className="h-6 w-6 sm:h-8 sm:w-8"
        />
      </div>
      <ul className="flex gap-5 text-2xl">
         {navIcons.map((itm)=>(
          <li key={itm.id}>{itm.icons}</li>
         ))}
      </ul>
      </section>
    </nav>
  );
}
