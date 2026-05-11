import { useState } from 'react'
import Row from './Row.jsx'

function Grid({ current = "", guesses, results, size = 5 }) {

  return (
    <div className="grid">

      {Array(size).fill(0).map((_, i) => {

        const isCurrentRow = i === guesses.length;
        const isSubmittedRow = i < guesses.length;

        return (
          <Row
            key={i}
            word={isCurrentRow ? current : (guesses[i] || "")}
            results={isCurrentRow ? [] : (results[i] || [])}
            size={size}
            submitted={isSubmittedRow}
          />
        );
      })}

    </div>
  );
}

export default Grid
