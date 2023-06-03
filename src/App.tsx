import { useEffect, useState } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("access_token") ?? false
  );
  useEffect(() => {
    const setAuth = () => {
      setIsAuthenticated(true);
    };
    addEventListener("storage", setAuth);
    return () => {
      removeEventListener("storage", setAuth);
    };
  }, []);

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
}

export default App;
