// Exercício 5 - Componente Usuario
function Usuario({ nome, idade }) {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
    </div>
  )
}

function Exercicio05() {
  return (
    <Usuario nome="João" idade={20} />
  )
}

export default Exercicio05
