import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
