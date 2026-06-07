import { useState } from 'react'
import Exercicio01 from './exercicios/Exercicio01'
import Exercicio02 from './exercicios/Exercicio02'
import Exercicio03 from './exercicios/Exercicio03'
import Exercicio04 from './exercicios/Exercicio04'
import Exercicio05 from './exercicios/Exercicio05'
import Exercicio06 from './exercicios/Exercicio06'
import Exercicio07 from './exercicios/Exercicio07'
import Exercicio08 from './exercicios/Exercicio08'
import Exercicio09 from './exercicios/Exercicio09'
import Exercicio10 from './exercicios/Exercicio10'

const exercicios = [
  { num: 1,  componente: 'Titulo',      props: 'texto',           desc: 'Recebe texto → renderiza <h1>',             ex: <Exercicio01 /> },
  { num: 2,  componente: 'Paragrafo',   props: 'conteudo',        desc: 'Recebe conteudo → renderiza <p>',           ex: <Exercicio02 /> },
  { num: 3,  componente: 'Imagem',      props: 'src, alt',        desc: 'Recebe src e alt → renderiza <img>',        ex: <Exercicio03 /> },
  { num: 4,  componente: 'Botao',       props: 'label',           desc: 'Recebe label → renderiza <button>',         ex: <Exercicio04 /> },
  { num: 5,  componente: 'Usuario',     props: 'nome, idade',     desc: 'Recebe nome e idade → exibe os dados',      ex: <Exercicio05 /> },
  { num: 6,  componente: 'Produto',     props: 'nome, preco',     desc: 'Recebe nome e preco → exibe produto',       ex: <Exercicio06 /> },
  { num: 7,  componente: 'Saudacao',    props: 'nome',            desc: 'Recebe nome → exibe "Olá, nome!"',          ex: <Exercicio07 /> },
  { num: 8,  componente: 'CardSimples', props: 'titulo, descricao', desc: 'Recebe titulo e descricao → card',        ex: <Exercicio08 /> },
  { num: 9,  componente: 'Rodape',      props: 'ano',             desc: 'Recebe ano → exibe © ano',                  ex: <Exercicio09 /> },
  { num: 10, componente: 'Status',      props: 'mensagem',        desc: 'Recebe mensagem → exibe em <span>',         ex: <Exercicio10 /> },
]

function App() {
  const [ativo, setAtivo] = useState(0)
  const ex = exercicios[ativo]

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-icon">
            <span className="logo-angle">&lt;</span>
            <span className="logo-slash">/</span>
            <span className="logo-angle">&gt;</span>
          </div>
          <div>
            <p className="logo-title">Components</p>
            <p className="logo-sub">Props · Lista 01</p>
          </div>
        </div>
        <nav className="nav-list">
          {exercicios.map((e, i) => (
            <button
              key={e.num}
              className={`nav-item ${ativo === i ? 'nav-item--active' : ''}`}
              onClick={() => setAtivo(i)}
            >
              <span className="nav-num">{String(e.num).padStart(2, '0')}</span>
              <div className="nav-info">
                <span className="nav-label">&lt;{e.componente} /&gt;</span>
                <span className="nav-hint">{e.props}</span>
              </div>
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <div className="content-inner">

          <div className="ex-header">
            <div className="ex-meta">
              <span className="chip chip-num">Ex. {String(ex.num).padStart(2, '0')}</span>
              <span className="chip chip-props">{ex.props}</span>
            </div>
            <h1 className="ex-title">
              <span className="ex-tag-open">&lt;</span>
              {ex.componente}
              <span className="ex-tag-close"> /&gt;</span>
            </h1>
            <p className="ex-desc">{ex.desc}</p>
          </div>

          <div className="code-block">
            <div className="code-bar">
              <span className="code-dot" style={{background:'#ff5f57'}}/>
              <span className="code-dot" style={{background:'#ffbd2e'}}/>
              <span className="code-dot" style={{background:'#28ca41'}}/>
              <span className="code-filename">Exercicio{String(ex.num).padStart(2,'0')}.jsx</span>
            </div>
            <div className="code-body">
              <span className="kw">function </span>
              <span className="fn">{ex.componente}</span>
              <span className="pu">({'{ '}</span>
              <span className="param">{ex.props}</span>
              <span className="pu">{' })'}</span>
              <span className="pu"> {'{'}</span>
              <br/>
              <span className="indent"/><span className="kw">return </span>
              <span className="pu">(</span>
              <span className="cm"> … </span>
              <span className="pu">)</span>
              <br/>
              <span className="pu">{'}'}</span>
            </div>
          </div>

          <div className="output-card">
            <div className="output-topbar">
              <span className="output-label">▶ saída renderizada</span>
            </div>
            <div className="output-body">
              {ex.ex}
            </div>
          </div>

          <div className="ex-nav">
            <button className="btn-nav" disabled={ativo === 0} onClick={() => setAtivo(a => a - 1)}>
              ← Anterior
            </button>
            <div className="stepper-dots">
              {exercicios.map((_, i) => (
                <button
                  key={i}
                  className={`step-dot ${i === ativo ? 'step-dot--active' : ''}`}
                  onClick={() => setAtivo(i)}
                  aria-label={`Exercício ${i + 1}`}
                />
              ))}
            </div>
            <button className="btn-nav" disabled={ativo === exercicios.length - 1} onClick={() => setAtivo(a => a + 1)}>
              Próximo →
            </button>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
