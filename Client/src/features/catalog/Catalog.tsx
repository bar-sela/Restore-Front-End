import "../../styles/Catalog.css";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/Product";
import { useTheme } from "../../context/AppThemeProvider";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const addProduct = (): void => {};
  const theme =  useTheme()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:5021/api/Products");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "An unknown error occurred";

        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`catalog-container ${theme.theme === 'dark' ? 'dark' : 'light'}`}>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ProductList products={products} />
      )}
      <button className="add-button" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}
