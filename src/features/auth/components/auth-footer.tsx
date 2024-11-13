import Link from "next/link";

export const AuthFooter = () => {
  return (
    <div className="z-10 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-screen-lg w-full mx-auto flex items-center justify-center"> 
      <p className="text-xs md:text-base font-normal hover:opacity-50 pb-2 md:pb-4">
        Copyright © 2024, Any Platform. <span className="mr-5"></span> All Rights Reserved.
      </p>
    </div>
  );
};

