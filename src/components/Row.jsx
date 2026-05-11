import { useState } from 'react'
import Letter from './Letter.jsx'

function Row({word, results, size, submitted = false}) {
  return (
    <div className = "row">   
        {Array(size).fill(0).map((_, i) => (
            <Letter 
                key={i} 
                letter={word[i] || ""} 
                condition={results[i] || ""}
                submitted = {submitted}
                index = {i}
            />
        ))} 
    </div>
  )
}

export default Row
