import { LandingPage } from "./pages/LandingPage";
import {  
    Routes,
    Route,
    Link
} from "react-router-dom";
import styles from "./component/App.module.css";
import { MovieDetails } from "./pages/MovieDetails";
import { NotFound } from "./component/NotFound";


export function App(){
    return (
        <div>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>
                        Movies🍿
                    </h1>
                </Link> 
            </header>

            <main>
                <Routes>
                    <Route path="/movies/:movieId" element={<MovieDetails/>} />
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main> 
        </div>  
    );
}