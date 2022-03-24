import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sucesso() {
    return (
        <main>
            <h2 className="success">Pedido feito com sucesso!</h2>


            <section className="infos">
                <div className="info">
                    <h3>Filme e sessão</h3>
                    <h4>Enola Holmes</h4>
                    <h4>24/06/2021 15:00</h4>
                </div>

                <div className="info">
                    <h3>Ingressos</h3>
                    <h4>Assento 15</h4>
                    <h4>Assento 16</h4>
                </div>

                <div className="info">
                    <h3>Comprador</h3>
                    <h4>Nome: João da Silva Sauro</h4>
                    <h4>CPF: 123.456.789-10</h4>
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