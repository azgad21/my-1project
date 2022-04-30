import React, {useState} from 'react';
import quotes from '../quotes.json'



const Button = () => {

    const colors = ['lime', 'olive', 'teal', 'brown', 'orange', 'aquamarine', 'cadetblue', 'black', 'chartreuse', 'coral']

    const randomQuote = Math.floor(Math.random() * quotes.length)
    const [quote, setQuote] = useState(randomQuote)

    const changeQuote = () => {
        const randomQuote = Math.floor(Math.random() * quotes.length)
        setQuote(randomQuote)
    }

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;


    return (
        <div  className='card' style={{color: colors[randomColor]}}>
            <h2>
                {quotes[quote].quote}<br></br>
                {quotes[quote].author}
            </h2>
            <button style={{color: colors[randomColor]}} className='button' onClick={changeQuote}> <i className="fa-solid fa-circle-chevron-right"> </i> </button>
        </div>
    );
};

export default Button;