import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";



export default function Stats() {
  const { products, removeProduct } = useProducts();
  const { addToCart } = useCart(); 

  return (
    <section className="products-section">
      <h2>CONFIRA NOSSAS MERCADORIAS</h2>

      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>R$ {p.price}</p>

            <div className="product-buttons">
              <Link to={`/produto/${p.id}`}>
                <button>Ver     Produto</button>
              </Link>

              <button
                onClick={() => addToCart(p)}
                className="add-cart-btn"
              >
                Adicionar ao carrinho
              </button>

              <button
                onClick={() => removeProduct(p.id)}
                className="delete-btn"
              >
                Remover Produto
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}