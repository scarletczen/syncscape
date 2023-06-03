import { Outlet } from "react-router-dom";

type Props = {};

function AuthLayout({}: Props) {
  return (
    <div className="w-full h-full grid-cols-2 sm:grid">
      {/* BODY */}
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
      {/* IMAGE */}
      <div className="relative items-center justify-center hidden w-full h-full overflow-hidden bg-gradient-to-tl from-mauve1 to-violet3 sm:flex">
        <img
          className="self-end mb-16 scale-150 animate-pulse"
          src="/luminary.svg"
        />
        <img
          src="/syncscape-gradient.svg"
          className="absolute z-10 w-[500px] h-auto fill-violet-400"
        />
      </div>
    </div>
  );
}

export default AuthLayout;
