import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

export default function Produto() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();

  const produto = products.find(p => p.id === Number(id));

  if (!produto) {
    return <h2 style={{ padding: 40 }}>Produto não encontrado</h2>;
  }

  return (
    <div className="produto-page">
      <img src={produto.img} alt={produto.name} />

      <div className="produto-info">
        <h1>{produto.name}</h1>
        <p className="produto-preco">R$ {produto.price}</p>

        <p className="produto-desc">
          {produto.string}
        </p>

        <button
          className="add-cart-btn"
          onClick={() => addToCart(produto)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}