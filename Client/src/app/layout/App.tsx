import Navbar from "./Navbar";
// ודא שזה הנתיב הנכון
import "../../../src/styles/Theme.css"; // כדי שתקבל את הסטיילים של light/dark
import { AppThemeProvider } from "../../context/AppThemeProvider";
import { Outlet } from "react-router-dom";

function App() {
  console.log("App component rendered");  
  return (
    <AppThemeProvider>
      <Navbar />
      <Outlet />
    </AppThemeProvider>
  );
}

export default App;
