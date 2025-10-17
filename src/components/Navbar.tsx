"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/retroui/Button";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between border-b-2 rounded-md border-black bg-[#f5f4f1] px-6 py-3">
      <div className="flex items-center gap-3">
        <Link href="/" className="font-minecraft text-xl tracking-wide">
          Elsewhere
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="#music" className="hover:underline">
          Music
        </Link>
        <Link href="#watch" className="hover:underline">
          Watch
        </Link>
        <Button size="sm">Random</Button>
      </div>
    </nav>
  );
};

export default Navbar;
