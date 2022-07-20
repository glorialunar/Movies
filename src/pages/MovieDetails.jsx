import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { httpGet } from "../utils/httpClient";

import styles from "./MovieDetails.module.css";

export function MovieDetails(){
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        httpGet("/movie/" + movieId).then(data => {
                setMovie(data);
            })

    }, [movieId]);

    if(!movie){
        return null;
    }

    const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

    return (
        <div className={styles.detailsContainer}>
            <img
            width={400}
            height={600}
            src={imageURL} 
            alt={movie.title}
            className={`${styles.col} ${styles.movieImage}`}/>

            <div className={`${styles.movieDetails} ${styles.col}`}>
                <p className={styles.firstItem}>
                    <strong> Title: </strong> {movie.title}
                </p>
                <p>
                    <strong> Genero: </strong> {movie.genres.map((genre) => genre.name).join(", ")}
                </p>   
                <p>
                    <strong> Descripcion: </strong> {movie.overview}
                </p>
            </div>
        </div>
    )
}