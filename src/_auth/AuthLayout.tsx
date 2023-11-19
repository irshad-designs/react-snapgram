import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isUserExist = true;
  return (
    <>
      {isUserExist ? (
        <section className="flex  justify-center items-center flex-col py-10">
          <Outlet />
        </section>
      ) : (
        <Navigate to="/sign-in" />
      )}
    </>
  );
};

export default AuthLayout;
