import { Outlet } from "react-router-dom";

type Props = {};

function AuthLayout({}: Props) {
  return (
    <div className="w-full h-full grid grid-cols-2 ">
      <img src="/bg-logo.png" className="h-full w-full object-cover" />
      <div className="bg-violet-100">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
