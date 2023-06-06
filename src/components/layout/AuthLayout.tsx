import { Outlet } from "react-router-dom";
import { ReactComponent as GradientLogo } from "@assets/syncscape-gradient.svg";
import { ReactComponent as LuminaryBg } from "@assets/luminary.svg";

type Props = {};

function AuthLayout({}: Props) {
  return (
    <div className="w-full h-full min-h-[100vh] grid-cols-2 sm:grid">
      {/* BODY */}
      <div className="relative w-full h-full overflow-y-auto bg-mauve1">
        <Outlet />
        <span className="absolute hidden text-xs sm:flex bottom-10 left-10 text-mauve10">
          ©SYNCSCAPE 2023
        </span>
        <GradientLogo className="absolute hidden w-24 h-auto top-10 left-10 sm:flex" />
      </div>
      {/* IMAGE */}
      <div className="relative items-center justify-center hidden w-full h-full overflow-hidden bg-gradient-to-tl from-mauve1 to-violet3 sm:flex">
        <LuminaryBg className="absolute top-0 h-3/4 scale-y-[-1] animate-pulse" />
        <LuminaryBg className="absolute bottom-0 animate-pulse" />
        <GradientLogo className="absolute z-10 w-[500px] h-auto fill-violet-400" />
      </div>
    </div>
  );
}

export default AuthLayout;
