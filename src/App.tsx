import Header from "./Components/Header"
import './assets/css/main.css'
import Banner from "./Components/Banner"
import { Carousel } from "./Components/Carousel"

function App() {
  return (
    <main className="relative bg-black">
      <Header/>
      <Banner/>
      <Carousel/>
    </main>
  )
}

export default App