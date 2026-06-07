// Exercício 7 - Componente Saudacao
function Saudacao({ nome }) {
  return (
    <p>Olá, {nome}!</p>
  )
}

function Exercicio07() {
  return (
    <Saudacao nome="Maria" />
  )
}

export default Exercicio07
