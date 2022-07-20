import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "../hooks/useQuery";
import { httpGet } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";



export function MoviesGrid(){
    const [ isLoading, setIsLoading ] = useState(true);
    const [ movies, setMovies ] = useState([]);
    const query = useQuery();
    const search = query.get("search");

    //Este efecto por defecto se cargará una primera vez completa, si se le pasa un parámetro por search, entonces va a traer solo las movies que se le indique en el panel de busqueda.

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search 
            ? "/search/movie?query=" + search
            : "/discover/movie";

        httpGet(searchUrl)
            .then(data => {
                setMovies(data.results);
                setIsLoading(false);
        })

    }, [search]);

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