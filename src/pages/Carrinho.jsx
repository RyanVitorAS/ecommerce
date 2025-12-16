import { useCart } from "../context/CartContext";

export default function Carrinho() {
  const { cart, removeFromCart, clearCart } = useCart();

function handleBuy() {
  alert("Compra sucedida! 🛒✅");
  clearCart();
}

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (

    
    <div style={{ padding: "40px" }}>
      <h1>Seu Carrinho</h1>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio 😢</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              <img src={item.img} width="120" />

              <div>
                <h3>{item.name}</h3>
                <p>R$ {item.price}</p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: "red",
                    color: "white",
                    padding: "6px 12px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}

          <h2>Total: R$ {total}</h2>

          <button
            onClick={clearCart}
            style={{
              marginTop: 20,
              background: "black",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Limpar carrinho

          </button>
          <button
            onClick={handleBuy}
            style={{
              marginTop: 20,
              marginLeft: 10,
              background: "green",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Comprar Produto(s)
           </button>

        </>
      )}
    </div>
  );
}