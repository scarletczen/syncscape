import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@components/layout/Layout";
type Props = {};

function PrivateRoutes({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={"/dashboard"} replace />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/users/*" element={<div>Users</div>} />
        <Route path="*" element={<Navigate to={"/dashboard"} replace />} />
      </Route>
    </Routes>
  );
}

export default PrivateRoutes;
