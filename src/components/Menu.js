import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Menu() {
    const [movies, setMovies] = React.useState([])

    React.useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then(answer => {
            setMovies(answer.data)
        })
    }, [])


    return (
        <main>
            <h2>Selecione o filme</h2>
            <section className="movies">
                {
                    movies.map(movie => {
                        return (
                            <div className="movie" key={movie.id}>
                                <Link to={`/filme/${movie.id}`}>
                                    <img src={movie.posterURL} alt={`Poster do filme ${movie.title}`} />
                                </Link>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}