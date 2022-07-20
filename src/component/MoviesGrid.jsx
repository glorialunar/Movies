import { useState } from "react";
import { useEffect } from "react";
import { httpGet } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";

export function MoviesGrid(){
    const [ isLoading, setIsLoading ] = useState(true);
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        setIsLoading(true);
        httpGet("/discover/movie")
            .then(data => {
                setMovies(data.results);
                setIsLoading(false);
        })

    }, []);

    if(isLoading){
        return <Spinner/>
    }

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/> 
            ))}
        </ul>
    );
}