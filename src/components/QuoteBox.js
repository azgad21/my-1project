import React, {useState} from 'react';
import quotes from '../quotes.json'

const QuoteBox = () => {

    const randomQuote = Math.floor(Math.random() * quotes.length)
    const [quote, setQuote] = useState(randomQuote)

    const changeQuote = () => {
        const randomQuote = Math.floor(Math.random() * quotes.length)
        setQuote(randomQuote)
    }

    return (
        <div className='card'>
            <h2>
                {quotes[quote].quote}
                {quotes[quote].author}
            </h2>
            <button onClick={changeQuote}>Change quote</button>
        </div>
    );
};

export default QuoteBox;