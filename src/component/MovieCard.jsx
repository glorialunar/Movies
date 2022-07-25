import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({movie}){
    const imageURL = getMovieImg(movie.poster_path, 300);

    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img 
                width={230}
                height={345}
                src={imageURL} 
                alt={movie.title} 
                className={styles.movieImage}/>

                <div>{movie.title}</div>
            </Link>
        </li>
    )
}