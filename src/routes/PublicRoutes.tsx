import AuthLayout from "@components/layout/AuthLayout";
import { Navigate, Route, Routes } from "react-router-dom";

type Props = {};

function PublicRoutes({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="login/*" element={<div>Login</div>} />
        <Route path="register/*" element={<div>Register</div>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  );
}

export default PublicRoutes;
