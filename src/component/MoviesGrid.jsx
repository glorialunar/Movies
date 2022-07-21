import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "../hooks/useQuery";
import { httpGet } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';



export function MoviesGrid(){
    const [ isLoading, setIsLoading ] = useState(true);
    const [ movies, setMovies ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ hasMore, setHasMore ] = useState(true);

    const query = useQuery();
    const search = query.get("search");

    //Este efecto por defecto se cargará una primera vez completa, si se le pasa un parámetro por search, entonces va a traer solo las movies que se le indique en el panel de busqueda.

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search 
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;

        httpGet(searchUrl)
            .then(data => {
                setMovies(prevMovies => prevMovies.concat(data.results));
                setHasMore(data.page < data.total_pages);
                setIsLoading(false);
        })

    }, [search, page]);

    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={() => setPage(prevPage => prevPage + 1)}
            hasMore={hasMore}
            loader={<Spinner/>}
        >
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/> 
                ))}
            </ul>
        </InfiniteScroll>
    );
}