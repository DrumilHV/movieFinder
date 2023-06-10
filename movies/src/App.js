import React, { useEffect, useState } from 'react'
// require('dotenv').config();
// import 'dotenv/config'
import search from './search.svg'


import './App.css';
import MovieCard from './MovieCard';

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;



const App = () => {
    const [movies, setMovies] = useState([]);
    const [seachTerm, setSearchTerm] = useState('');
    useEffect(() => {
        seachMovies('superman')
    }, []);
    const seachMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // console.log(data.Search);
        setMovies(data.Search)
    }
    return (
        <div className='app'>
            <h1>
                MOVIEPLACE
            </h1>
            <div className='search'>
                <input
                    placeholder='seach for movies'
                    value={seachTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    // src='./search'
                    src={search}
                    alt='search'
                    onClick={() => seachMovies(seachTerm)}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App