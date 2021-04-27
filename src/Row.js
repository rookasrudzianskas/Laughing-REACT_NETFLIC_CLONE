import React, {useEffect, useState} from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    // a sniper of code which runs on a specific condition
    useEffect(() => {
        // if [], run once when the row loads, and do not run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
            // https://api.themoviedb.org/3 + 🔝
        }
        fetchData();
    }, [fetchUrl])

    return (
             // Rendering rows
            <div className="row">
                <h2>{title}</h2>
                    <div className="row__posters">
                        {/*    row__poster  */}
                        {movies.map(movie => (
                            // "/fdsfsdfafsddfsdfdsfsdfdfsd.jpg //
                            <img className="row__poster" src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                        ))}


                </div>
            </div>

    )
}

export default Row;