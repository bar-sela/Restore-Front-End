import { Product } from "../../app/models/Product";
import "../../styles/ProductCard.css";
import { IMAGE_BASE_PATH } from "../../constants/paths.ts";
import { useTheme } from "../../context/AppThemeProvider.tsx";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  console.log(theme);
  console.log(`${IMAGE_BASE_PATH}${product.pictureUrl}`);
  return (
    <div className={`product-card ${theme === "dark" ? "product-dark" : ""}`}>
      <img
        src={`${IMAGE_BASE_PATH}${product.pictureUrl}`}
        alt={product.name}
        className="product-image"
      />
      <div className="product-content">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <div className="product-actions">
          <button className="action-button left">ADD TO CART</button>
          <button
            className="action-button right"
            onClick={() => navigate(`/catalog/${product.id}`)}
          >
            VIEW
          </button>
        </div>
      </div>
    </div>
  );
}
