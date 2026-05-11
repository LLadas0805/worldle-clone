import { useState, useEffect } from 'react'
import './App.css'
import Grid from './components/Grid.jsx'

function App() {
  // Keyword 
  const word = "WORDS";

  // React states
  const [guesses, setGuesses] = useState([])
  const [guess, setGuess] = useState("")
  const [results, setResults] = useState([]);

  useEffect (() => {
    const handleKeyDown = (event) => {
      if (guess.length === 5 && event.key === "Enter") {
        const result = []
        for (let i = 0; i < word.length; i++) {
          if (guess[i] === word[i]) {
            result.push("correct")
          } else if (word.includes(guess[i])) {
            result.push("close") 
          } else {
            result.push("wrong")
          }
        }
        setResults(prev => [...prev, result])
        setGuesses(prev => [...prev, guess]);
        setGuess("") 
      } else if (guess.length < 5 && /^[a-z]$/i.test(event.key)) {
        setGuess(prev => prev + event.key.toUpperCase());
      } else if (guess.length !== 0 && event.key === "Backspace") {
        setGuess(prev => prev.slice(0, -1));
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

  }, [guess])
  

  return (
    <>
      <section id="center">
        <div className="hero">
        </div>
        <div>
          <h1 className="header">Wordle Clone</h1>
          <Grid current = {guess} guesses={guesses} results={results}/>
        </div>
      </section>
    </>
  )
}

export default App
