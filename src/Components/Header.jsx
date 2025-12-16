import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import { useState } from "react";

function Header() {
  const { cart } = useCart();
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  // filtra produtos conforme o texto digitado
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://th.bing.com/th/id/R.a086c4b3a10bad841ff31d7a5d87430c?rik=MF1TqkhniP2Mow&pid=ImgRaw&r=0"
          alt="Aurora Store"
        />
        <h1>GEEK <span>Shop</span></h1>
      </div>

      {/* 🔍 CAIXA DE PESQUISA */}
      <div className="search-box" style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Qual produto que está procurando?"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* 📋 LISTA DE RESULTADOS */}
        {search && (
          <div className="search-results">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(p => (
                <Link
                  key={p.id}
                  to={`/produto/${p.id}`}
                  onClick={() => setSearch("")}
                >
                  {p.name}
                </Link>
              ))
            ) : (
              <p>Nenhum produto encontrado</p>
            )}
          </div>
        )}
      </div>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/conta">Minha conta</Link>

        <div style={{ position: "relative" }}>
          <Link to="/carrinho">Carrinho</Link>

          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: -8,
                right: -10,
                backgroundColor: "red",
                color: "white",
                width: 20,
                height: 20,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 12,
                fontWeight: "bold"
              }}
            >
              {cart.length}
            </span>
          )}
        </div>

        <Link to="/cadastrar">Cadastrar Produto</Link>
      </div>
    </header>
  );
}

export default Header;