import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Filme(props) {
    const {callback} = props;
    const { idFilme } = useParams();
    const [sessions, setSessions] = React.useState([])

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then(answer => {
            setSessions(answer.data.days)
        })
    }, [])

    console.log(sessions)

    return (
        <main>
            <h2>Selecione o horário</h2>

            {
                sessions.map(session => {
                    const {weekday, date, showtimes} = session;

                    return (
                        <div className="session" key={session.id}>
                            <h3>{weekday} - {date}</h3>
                                {
                                showtimes.map(showtime => {
                                    const {id, name} = showtime
                                    return (
                                        <Link to={`/sessao/${id}`} key={id}>
                                            <button onClick={() => {
                                                callback(date, name);
                                            }}>{name}</button>
                                        </Link>
                                    )
                                })
                                }
                        </div>
                    )
                })
            }

        </main>
    )
}