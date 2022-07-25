import styles from "./Search.module.css";
import { GoSearch } from 'react-icons/go';
import { useSearchParams  } from "react-router-dom";

export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    placeholder="Title"
                    aria-label="Search Movies"
                    type="text"
                    value={search ?? ""}
                    autoFocus
                    onChange={(e) => {
                        const value = e.target.value;
                        setQuery({search:value})
                    }} 
                />
                <button className={styles.searchButton} type="submit">
                    <GoSearch size={20} />
                </button>
            </div>
        </form>
    )
}
