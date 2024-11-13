import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-xs xl:text-sm text-semibold", font.className)}>
        ANY PLATFORM
      </h1>
      <p className="font-semibold text-base xl:text-lg">{label}</p>
    </div>
  );
};

