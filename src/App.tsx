
import Home from './layout/Home'
import Navigation from './layout/Navigation'
import Card from './components/Card'
import About from './layout/About'
import Skills from './components/Skills'
import Services from './layout/Services'

function App() {

  return (
    <main className="flex flex-col font-body gap-20">
      <Navigation />
      <div className="flex flex-col gap-1">
        <Home />
        <Card />
      </div>
      <div className="flex flex-col">
        <About />
        <Skills />
      </div>
      <Services />
    </main>
  )
}

export default App
