import { useState } from "react";
import { useProducts } from "../context/ProductContext";

export default function CadastroProduto() {
  const { addProduct } = useProducts();

  const [name, setName] = useState("");
  const [string, setString] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addProduct({
      name,
      string,
      price: Number(price),
      img
    });

    setName("");
    setString("");
    setPrice("");
    setImg("");

    alert("Produto cadastrado com sucesso!");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Cadastrar Produto</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <input
          placeholder="Nome do produto"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          placeholder="descrição do produto"
          value={string}
          onChange={e => setString(e.target.value)}
          required
        />


        <input
          placeholder="Preço"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />

        <input
          placeholder="URL da imagem"
          value={img}
          onChange={e => setImg(e.target.value)}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}