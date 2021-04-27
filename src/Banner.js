import React, {useEffect, useState} from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";


const Banner = () => {
    const [movie, setMovie] = useState([]);

    // run to fetch the data from api, and store in request, then setMovie state to the random movie from fetched movies

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
            );
            return request;
        }
        fetchData()
    }, []);

    return (

        // Header Image background

        <header className="banner"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(
              "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"`,
                backgroundPosition: "center center"
            }}
        >

            {/* End of header image background  */}

            <div className="banner__contents">

                {/* Film name on the banner */}

                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
            {/*     End of film name on the banner  */}

                {/* movie description */}

                <h1 className="banner__description">{movie?.overview}</h1>

            {/*    end of movie description */}
            </div>

        </header>
    )
}

export default Banner;