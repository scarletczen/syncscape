import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  const isAuthenticated = localStorage.getItem("access_token") ? true : false;
  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
}

export default App;
