import styles from "./NotFound.module.css";
import notFound from "../img/error.png";

export function NotFound() {
    return (
        <div className={styles.notFound}>
            <img 
                src={notFound}
                alt="Not Found"
            />
        </div>
    )
}
