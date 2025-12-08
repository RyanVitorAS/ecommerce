import { useCart } from "../context/CartContext";

const products = [
  { img: "https://tse1.mm.bing.net/th/id/OIP.2BnjyPdz3ipkkgsplIoSQAAAAA?cb=ucfimg2&ucfimg=1&w=300&h=420&rs=1&pid=ImgDetMain&o=7&rm=3", name: "Jogo - Crash Bandicoot", price: "120" },
  { img: "https://http2.mlstatic.com/D_NQ_NP_714142-CBT77180288538_072024-O.webp", name: "Camisa - Jujutsu Kaisen", price: "175" },
  { img: "https://cdn.media.amplience.net/s/hottopic/14118228_hi?h=630", name: "Action Figure - Son Goku", price: "150" },
  { img: "https://th.bing.com/th/id/OIP.PHZTkF7e1X48oaLcvtp_VAHaLo?w=199&h=313&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1", name: "Manga - Chainsaw Man", price: "155" },
  { img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/sonic-the-hedgehog-genesis.jpg", name: "Jogo - Sonic the Hegedhog", price: "159" },
  { img: "https://action-figure-district.de/wp-content/uploads/2014/04/stac-potter1.jpg", name: "Action Figure - Harry Potter", price: "29" },
  { img: "https://down-br.img.susercontent.com/file/br-11134201-22120-31nl9l7wiolv99", name: "Camisa - Berserk", price: "49" },
  { img: "https://images-na.ssl-images-amazon.com/images/I/81LQBd62YSL.jpg", name: "Manga - Beastar", price: "69" },
];

export default function Stats() {
  const { addToCart } = useCart();

  return (
    <section className="products-section">
      <h2>CONFIRA NOSSAS MERCADORIAS</h2>

      <div className="products-grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>R${p.price}</p>

            <button onClick={() => addToCart(p)}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}


