import "./App.css";
import { useState } from "react";

// נגדיר את טיפוס המוצר
type Product = {
  name: string;
  price: number;
};

function App() {
  // נשתמש בטיפוס Product[]
  const [products, setProducts] = useState<Product[]>([]);

  const reset = () => setProducts([]);

  const addProductWrong = () => {
    reset(); // ננקה לפני ההדגמה
    setProducts([...products, { name: "❌ product1", price: 100 }]);
    setProducts([...products, { name: "❌ product2", price: 200 }]);
  };

  const addProductCorrect = () => {
    reset(); // ננקה לפני ההדגמה
    setProducts((prev) => [...prev, { name: "✅ product1", price: 100 }]);
    setProducts((prev) => [...prev, { name: "✅ product2", price: 200 }]);
  };

  return (
    <div className="App">
      <h2>📦 Products:</h2>
      {products.map((p, i) => (
        <div key={i}>
          • {p.name} – ₪{p.price}
        </div>
      ))}

      <br />

      <button onClick={addProductWrong}>❌ הוסף בדרך לא נכונה</button>
      <button onClick={addProductCorrect}>✅ הוסף בדרך נכונה</button>
    </div>
  );
}

export default App;
