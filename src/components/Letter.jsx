import { useEffect, useRef, useState } from 'react'

function Letter({letter = "", condition="", submitted = false, index = 0}) {
    const prevLetter = useRef("");
    const isNew = prevLetter.current !== letter;
    const [flip, setFlip] = useState(false);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        prevLetter.current = letter;
    }, [letter]);

    useEffect(() => {
        setFlip(false);
        setRevealed(false);

        if (submitted) {
            const flipTimer = setTimeout(() => {
                setFlip(true);
            }, index * 150);

            const revealTimer = setTimeout(() => {
                setRevealed(true);
            }, index * 150 + 300); 

            return () => {
                clearTimeout(flipTimer);
                clearTimeout(revealTimer);
            };
        }
    }, [submitted, index]);

    return (
        <div
            className={`letter-box
                ${revealed ? condition : ""}
                ${isNew && letter ? "pop" : ""}
                ${flip ? "flip" : ""}`}
        >
            <p className="letter-text">{letter}</p>
        </div>
    )
}

export default Letter
