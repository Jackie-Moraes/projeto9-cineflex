import React from "react";
import { Link } from "react-router-dom";

export default function Sucesso(props) {
    const {movie, date, hour, seats, name, cpf} = props
    console.log(seats);

    return (
        <main>
            <h2 className="success">Pedido feito com sucesso!</h2>


            <section className="infos">
                <div className="info">
                    <h3>Filme e sessão</h3>
                    <h4>{movie}</h4>
                    <h4>{date} {hour}</h4>
                </div>

                <div className="info">
                    <h3>Ingressos</h3>
                    {
                        seats.map(seat => {
                            return (
                                <h4 key={seat}>Assento {seat}</h4>
                            )
                        })
                    }
                </div>

                <div className="info">
                    <h3>Comprador</h3>
                    <h4>Nome: {name}</h4>
                    <h4>CPF: {cpf}</h4>
                </div>
            </section>

            <div className="finish">
                <Link to="/">
                    <button>Voltar pra Home</button>
                </Link>
            </div>
        </main>
    )
}