import { MoviesGrid } from "../component/MoviesGrid";
import { Search } from "../component/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    //Espera 300 milisegundos a que el usuario termine de escribir en el buscador para comenzar a realizar la busqueda sin necesidad de dar Enter
    const debouncedSearch = useDebounce(search, 300);

    return (
        <div>
            <Search/>
            <MoviesGrid key={search} search={debouncedSearch}/>
        </div>   
    )
}