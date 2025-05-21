import "../../styles/Navbar.css";
import { useTheme } from "../../context/AppThemeProvider";
import { midLinks, rightLinks } from "../../constants/contacts";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const cartCount = 1;

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
      <div className="navbar-middle">
        {midLinks.map(({ title, path }) => (
          <NavLink
            to={path}
            key={path}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link--active" : "nav-link"
            }
          >
            {title.toUpperCase()}
          </NavLink>
        ))}
      </div>

      <div className="navbar-right">
        <IconButton aria-label="cart" size="medium" sx={{ mx: "6px" }}>
          <Badge
            badgeContent={cartCount}
            color="error"
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <ShoppingCartIcon fontSize="inherit" />
          </Badge>
        </IconButton>

        {rightLinks.map(({ title, path }) => (
          <NavLink
            to={path}
            key={path}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link--active" : "nav-link"
            }
          >
            {title.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
