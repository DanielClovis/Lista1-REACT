// Exercício 6 - Componente Produto
function Produto({ nome, preco }) {
  return (
    <div>
      <p>Produto: {nome}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  )
}

function Exercicio06() {
  return (
    <Produto nome="Notebook" preco={3500} />
  )
}

export default Exercicio06
