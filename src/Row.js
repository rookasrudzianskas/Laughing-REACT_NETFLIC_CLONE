import React, {useEffect, useState} from "react";
import axios from "./axios";

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
        <div>

            {/* Rendering rows */}

            <h2>{title}</h2>



        {/*    container -? posters     */}
        </div>
    )
}

export default Row;