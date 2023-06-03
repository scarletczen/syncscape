import { Outlet } from "react-router-dom";

type Props = {};

function Layout({}: Props) {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default Layout;
