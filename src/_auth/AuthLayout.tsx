import { useUserContext } from "@/context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const { isAuthenticated } = useUserContext();
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="flex  justify-center items-center flex-col py-10">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default AuthLayout;
