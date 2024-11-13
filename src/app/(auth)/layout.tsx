
import AuthFooter from "@/components/auth/auth-footer";
import { AuthNavbar } from "@/components/auth/auth-navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-screen-lg p-4">
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
