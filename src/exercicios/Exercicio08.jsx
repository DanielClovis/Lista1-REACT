// Exercício 8 - Componente CardSimples
function CardSimples({ titulo, descricao }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  )
}

function Exercicio08() {
  return (
    <CardSimples
      titulo="Meu Card"
      descricao="Esta é a descrição do card, passada via prop."
    />
  )
}

export default Exercicio08
