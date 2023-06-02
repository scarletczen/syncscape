import { Outlet } from "react-router-dom";

type Props = {};

function AuthLayout({}: Props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
