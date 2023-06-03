import AuthLayout from "@components/layout/AuthLayout";
import Login from "@pages/auth/Login";
import Register from "@pages/auth/Register";
import { Navigate, Route, Routes } from "react-router-dom";

type Props = {};

function PublicRoutes({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="login/*" element={<Login />} />
        <Route path="register/*" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  );
}

export default PublicRoutes;
