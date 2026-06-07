// Exercício 9 - Componente Rodape
function Rodape({ ano }) {
  return (
    <p>© {ano}</p>
  )
}

function Exercicio09() {
  return (
    <Rodape ano={2026} />
  )
}

export default Exercicio09
