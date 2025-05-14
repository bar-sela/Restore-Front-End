import "../../styles/Navbar.css";
import { useTheme } from "../../context/AppThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const icon =
    theme === "light"
      ? "/images/products/sun-icon.png"
      : "/images/products/moon-icon.png";

  return (
    <div className="navbar">
      <div className="navbar-title">RE-STORE</div>
      <img
        src={icon}
        className="theme-icon"
        onClick={toggleTheme}
        alt="theme icon"
      />
    </div>
  );
}
