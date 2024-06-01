import { useEffect } from 'react';

import Header from './components/Header'
import About from './layout/About'
import Profile from './layout/Profile'
import Skills from './layout/Skills'
import Contact from './layout/Contact'
import Projects from './layout/Projects'
import Footer from './components/Footer'

import './assets/sass/_reset.sass'
import './app.sass'

function Line() {
  return (
    <div className="line"></div>
  )
}

function App() {

  useEffect(() => {
    document.title = 'Portfolio | Wendell de C Silva'
  }, [])

  return (
    <main className="container">
      <Header />
      <Profile />
      <Line />
      <About />
      <Line />
      <Skills />
      <Line />
      <Projects />
      <Line />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
