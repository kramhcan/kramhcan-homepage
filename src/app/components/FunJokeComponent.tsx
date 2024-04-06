import React, { useState } from 'react';

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fish wearing a bowtie? Sofishticated!",
    "Why did the bicycle fall over? Because it was two-tired!",
];

const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
};

const FunJokeComponent = () => {
    const [joke, setJoke] = useState('');

    const generateJoke = () => {
    const randomJoke = getRandomJoke();
    setJoke(randomJoke);
    };

    return (
    <div>
        <button className='font-bold px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black mt-3' onClick={generateJoke}>Generate Joke</button>
        <p className='pt-3 tex'>{joke}</p>
    </div>
    );
};

export default FunJokeComponent;