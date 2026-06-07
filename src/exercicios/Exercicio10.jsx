// Exercício 10 - Componente Status
function Status({ mensagem }) {
  return (
    <span>{mensagem}</span>
  )
}

function Exercicio10() {
  return (
    <Status mensagem="Componente ativo e funcionando!" />
  )
}

export default Exercicio10
