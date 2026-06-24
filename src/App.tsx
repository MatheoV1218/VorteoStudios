import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'

function App() {
  return (
    <div className="app">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
