import Header from "./Components/Header"
import './assets/css/main.css'
import Banner from "./Components/Banner"
import { Carousel } from "./Components/Carousel"
import { About } from "./Components/About"
import { Skills } from "./Components/Skills"

function App() {
  return (
    <main className="relative bg-dark">
      <Header/>
      <Banner/>
      <Carousel/>
      <About/>
      <Skills/>
    </main>
  )
}

export default App