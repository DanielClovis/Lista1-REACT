// Exercício 1 - Componente Titulo
function Titulo({ texto }) {
  return (
    <h1>{texto}</h1>
  )
}

function Exercicio01() {
  return (
    <Titulo texto="Aprendendo React com Components!" />
  )
}

export default Exercicio01
