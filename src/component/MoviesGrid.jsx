import { useState } from "react";
import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch ("https://api.themoviedb.org/3/discover/movie", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2JjN2QzNmQ5NDA5OGIxYWM0MWUyNjhjZDliMTQ3NCIsInN1YiI6IjYyZDgyMTQ5OTcxNWFlMDJhOWM5MjdkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qcx2N341SosVeZJ_vZAk2yhmR6S0LqLf_aUdHZgfD0U",

                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(result => result.json())
            .then(data => {
                setMovies(data.results);
            })

    }, []);

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/> 
            ))}
        </ul>
    );
}