import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center">
      <h3 className=" md:text-xl text-md font-black">KOUNTTIME</h3>
      <ModeToggle />
    </header>
  );
}
