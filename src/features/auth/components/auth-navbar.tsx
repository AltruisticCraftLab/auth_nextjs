"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";

export const AuthNavbar = () => {
  return (
    <nav className="w-full mx-auto max-w-screen-xl flex justify-between items-center">
      <Logo />
      <ModeToggle />
    </nav>
  );
};
