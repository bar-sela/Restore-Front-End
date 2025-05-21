import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/Product";
import "../../styles/ProductDetails.css";
import { IMAGE_BASE_PATH } from "../../constants/paths";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:5021/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  return (
    <div className="product-details-container">
      <img
        src={`${IMAGE_BASE_PATH}${product.pictureUrl}`}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <h2 className="product-price">${product.price.toFixed(2)}</h2>
        <p className="product-description">Table goes here</p>

        <div className="product-actions">
          <input
            type="text"
            value={product.quantityInStock}
            readOnly
            className="product-quantity"
            title="Quantity in basket"
          />
          <button className="add-to-basket-button">ADD TO BASKET</button>
        </div>
      </div>
    </div>
  );
}
