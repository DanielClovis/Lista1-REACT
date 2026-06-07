// Exercício 3 - Componente Imagem
function Imagem({ src, alt }) {
  return (
    <img src={src} alt={alt} style={{ width: '180px', borderRadius: '8px' }} />
  )
}

function Exercicio03() {
  return (
    <Imagem
      src="https://picsum.photos/seed/react/400/300"
      alt="Imagem de exemplo via props"
    />
  )
}

export default Exercicio03
