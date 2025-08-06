import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Recipe from './projects/Recipe';
import HSKFlashcards from './projects/HSKFlashcards';

function App() {
  
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects/riceofpassage" element={<Recipe />} />
          <Route path="/projects/hskflashcardmaker" element={<HSKFlashcards />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
