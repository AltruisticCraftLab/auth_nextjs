

import { AuthFooter } from "@/features/auth/components/auth-footer";
import { AuthNavbar } from "@/features/auth/components/auth-navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-screen-lg p-4">
        {/* <div className="mx-auto max-w-[1920px] py-4 px-10"> */}
          <AuthNavbar />  
          <div className="flex flex-col justify-center items-center pt-4 md:pt-14">
            {children}
          </div>
          <AuthFooter />
        </div>
      </main>

  );
};

export default AuthLayout;
