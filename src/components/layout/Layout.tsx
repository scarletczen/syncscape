import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

type Props = {};

function Layout({}: Props) {
  return (
    <div className="w-full h-full min-h-[100vh] flex items-center justify-center">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
