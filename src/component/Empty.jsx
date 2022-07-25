import styles from "./Empty.module.css";
import noResults from "../noResults.png";

export function Empty(path, width) {
    return (
        <div className={styles.empty}>
            <img 
                src={noResults}
                alt="No Results"
            />
        </div>
    )
}
