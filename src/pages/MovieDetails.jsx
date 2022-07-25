import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../component/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { httpGet } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails(){
    const { movieId } = useParams();
    const [ isLoading, setIsLoading ] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        httpGet("/movie/" + movieId).then(data => {
            setIsLoading(false);
            setMovie(data);
        })

    }, [movieId]);

    if(isLoading){
        return <Spinner/>
    }

    const imageURL = getMovieImg(movie.poster_path, 300);

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