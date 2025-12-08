import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://th.bing.com/th/id/R.a086c4b3a10bad841ff31d7a5d87430c?rik=MF1TqkhniP2Mow&pid=ImgRaw&r=0"
          alt="Aurora Store"
        />
        <h1>GEEK <span>Shop</span></h1>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Qual produto que está procurando?" />
      </div>

      <div className="menu">

        <Link to="/">Home</Link>
        <Link to="/conta">Minha conta</Link>

        {/* Ícone do carrinho com notificação */}
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

        <div className="account">
          <Link to="/login">Entre ou Cadastre-se</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
