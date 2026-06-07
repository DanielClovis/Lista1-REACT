// Exercício 2 - Componente Paragrafo
function Paragrafo({ conteudo }) {
  return (
    <p>{conteudo}</p>
  )
}

function Exercicio02() {
  return (
    <Paragrafo conteudo="Este é um parágrafo renderizado via prop conteudo." />
  )
}

export default Exercicio02
