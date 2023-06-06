import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@components/layout/Layout";
import WIP from "@assets/work-in-progress.png";
type Props = {};

function PrivateRoutes({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={"/dashboard"} replace />} />
        <Route
          path="/dashboard"
          element={
            <div className="flex flex-col items-center justify-center p-8 border rounded-md text-mauve12">
              I'm still working on this awesome project. You can check in later
              to see how this develops!{" "}
              <span>
                Meanwhile, you could visit my{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline"
                  href="https://github.com/abhinavthapa1998"
                >
                  GitHub profile{" "}
                </a>
                and check out my other work.
              </span>
              <img src={WIP} className="w-[250px] h-auto" />
            </div>
          }
        />
        <Route path="/users/*" element={<div>Users</div>} />
        <Route path="*" element={<Navigate to={"/dashboard"} replace />} />
      </Route>
    </Routes>
  );
}

export default PrivateRoutes;
