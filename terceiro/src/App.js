import { useState } from "react";
function App() {
  const [produto, setProduto] = useState([
    {
      id: 500,
      nome: "Mouse",
      categoria: "Informática",
      quantidade: "15",
      preco: 50.0,
    },

    {
      id: 501,
      nome: "Teclado",
      categoria: "Informática",
      quantidade: "20",
      preco: 150.9,
    },
  ]);

  return (
    <div>
      <button
        onClick={() => {
          var cod = prompt("Entre com o Código");
          var no = prompt("Entre com o Nome do Produto");
          var cat = prompt("Entre com a Categoria");
          var qt = prompt("Entre com a Quantidade");
          var pt = prompt("Entre com o Preço");

          setProduto(
            produto.concat({
              id: cod,
              nome: no,
              categoria: cat,
              quantidade: qt,
              preco: pt,
            })
          );
        }}
      >
        Clique
      </button>

      {produto.map((item, index) => (
        <div key={index}>
          <h2>{item.nome}</h2>
          <ul>
            <li>Código: {item.id}</li>
            <li>Categoria: {item.categoria}</li>
            <li>Quantidade: {item.quantidade}</li>
            <li>Preço: {item.preco}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
