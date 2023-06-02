import "./App.css";

import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  const isAuthenticated = false;
  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
}

export default App;
