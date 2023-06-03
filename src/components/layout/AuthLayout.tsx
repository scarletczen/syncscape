import { Outlet } from "react-router-dom";

type Props = {};

function AuthLayout({}: Props) {
  return (
    <div className="w-full h-full grid-cols-2 sm:grid">
      <div className="relative w-full h-full bg-mauve1">
        <Outlet />
        <span className="absolute text-xs bottom-10 left-10 text-mauve10">
          ©SYNCSCAPE 2023
        </span>
        <img
          src="/syncscape-gradient.svg"
          className="absolute hidden w-24 h-auto top-10 left-10 sm:flex"
        />
      </div>
      <div className="items-center justify-center hidden w-full h-full bg-gradient-to-tl from-violet-50 to-violet-100 sm:flex">
        <img
          src="/syncscape-gradient.svg"
          className="w-[500px] h-auto fill-violet-400"
        />
      </div>
    </div>
  );
}

export default AuthLayout;
