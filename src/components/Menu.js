import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Menu(props) {
    const {callback} = props;
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
                        const {id, posterURL, title} = movie;
                        return (
                            <div className="movie" key={id}>
                                <Link to={`/filme/${id}`}>
                                    <img src={posterURL} alt={`Poster do filme ${title}`} onClick={() => 
                                        callback(title)
                                        }/>
                                </Link>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}