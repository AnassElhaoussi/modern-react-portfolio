
import Home from './layout/Home'
import Navigation from './layout/Navigation'
import Card from './components/Card'
import About from './layout/About'
import Skills from './components/Skills'
import Services from './layout/Projects'
import Contact from './layout/Contact'

function App() {

  return (
    <main className="flex flex-col font-body gap-20 pb-10">
      <Navigation />
      <div className="flex flex-col gap-1">
        <Home />
        <Card />
      </div>
      
        <About />
        <Skills />
    
      <Services />
      <Contact />
    </main>
  )
}

export default App
