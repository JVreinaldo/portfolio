import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Intro } from './components/sections/Intro'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <div id="topo" />
      <Header />

      <main id="conteudo">
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
