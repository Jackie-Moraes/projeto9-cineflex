import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Sessao() {
    const {idShowtime} = useParams();
    const [seats, setSeats] = React.useState([]);

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idShowtime}/seats`)

        promise.then(answer => {
            setSeats(answer.data.seats)
        })
    }, [])

    console.log(seats)

    return (
        <main>
            <h2>Selecione o(s) assento(s)</h2>

            <div className="seats">
                {
                    seats.map(seat => {
                        const {isAvailable:open} = seat;
                        return (
                            <button key={seat.id} className={open ? "" : "unavailable"}>{seat.name < 10 ? "0" : ""}{seat.name}</button>
                        )
                    })
                }
            </div>

            <section className="examples">
                <div className="example">
                    <button className="selected" />
                    <p>Selecionado</p>
                </div>

                <div className="example">
                    <button />
                    <p>Disponível</p>
                </div>

                <div className="example">
                    <button className="unavailable"/>
                    <p>Indisponível</p>
                </div>
            </section>

            <section className="customer">
                <h3>Nome do comprador:</h3>
                <input placeholder="Digite seu nome..."></input>
                <h3>CPF do comprador:</h3>
                <input placeholder="Digite seu CPF..."></input>
            </section>

            <div className="finish">
                <Link to="/sucesso">
                    <button>Reservar assento(s)</button>
                </Link>
            </div>
        </main>
    )
}