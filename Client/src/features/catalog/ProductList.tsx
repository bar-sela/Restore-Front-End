import { Product } from "../../app/models/Product";
import ProductCard from "./ProductCard";
import "../../styles/ProductList.css";
import { useTheme } from "../../context/AppThemeProvider";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const { theme } = useTheme();
  return (
    <ul
      className={`catalog-list ${
        theme === "dark" ? "list-dark" : "list-light"
      }`}
    >
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
