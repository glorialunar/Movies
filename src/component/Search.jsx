import styles from "./Search.module.css";
import { GoSearch } from 'react-icons/go';
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams  } from "react-router-dom";

export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");
    const navigate = useNavigate();

    // const [searchText, setSearchText] = useState("");

    //Este hook va a permitir que se "limpie" el input luego de hacer una búsqueda y regresar a Home. Search, cuando no hay nada en la query, es null y el value del input nunca puede ser null. Es por eso que se implementa el || ""
    // useEffect(() => {
    //     setSearchText(search || "");
    // }, [search]);


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
                        // navigate('/?search=' + value);
                    }} 
                />
                <button className={styles.searchButton} type="submit">
                    <GoSearch size={20} />
                </button>
            </div>
        </form>
    )
}
