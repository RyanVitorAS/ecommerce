import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const initialProducts = [
  {
    id: 1,
    name: "Jogo - Crash Bandicoot",
    price: 120,
    img: "https://tse1.mm.bing.net/th/id/OIP.2BnjyPdz3ipkkgsplIoSQAAAAA?cb=ucfimg2&ucfimg=1&w=300&h=420&rs=1&pid=ImgDetMain&o=7&rm=3",
    string: "Clássico jogo de plataforma da Naughty Dog."
  },
  {
    id: 2,
    name: "Action Figure - Son Goku",
    price: 150,
    img: "https://cdn.media.amplience.net/s/hottopic/14118228_hi?h=630",
    string: "Action figure do Goku em alta qualidade de Dragon Ball Super."
  },
  {
    id: 3,
    name: "Camisa - Jujutsu Kaisen",
    price: 175,
    img: "https://http2.mlstatic.com/D_NQ_NP_714142-CBT77180288538_072024-O.webp",
    string: "Camisa para quem é fã de Jujutsu Kaisen"
  }
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    setProducts(prev => [
      ...prev,
      { ...product, id: Date.now() }
    ]);
  };

  const removeProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}