import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


let selectedSeats = [];

export default function Sessao(props) {
    const {callback} = props;
    const {idShowtime} = useParams();
    const [seats, setSeats] = React.useState([]);
    const [nome, setNome] = React.useState("");
    const [CPF, setCPF] = React.useState("");

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idShowtime}/seats`)

        promise.then(answer => {
            setSeats(answer.data.seats)
        })
    }, []);

    function selectSeats(seatNum) {
        selectedSeats = [...selectedSeats, seatNum]
    }

    return (
        <main>
            <h2>Selecione o(s) assento(s)</h2>

            <div className="seats">
                {
                    seats.map(seat => {
                        const {isAvailable:open, id, name} = seat;
                        return (
                            <button key={id} className={open ? "" : "unavailable"} onClick={open ? () => {
                                selectSeats(name);
                            } : null}>{name < 10 ? `0${name}` : name}</button>
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
                <input placeholder="Digite seu nome..." onChange={(e) => {
                    setNome(e.target.value)
                }}></input>
                <h3>CPF do comprador:</h3>
                <input placeholder="Digite seu CPF..." onChange={(e) => {
                    setCPF(e.target.value)
                }}></input>
            </section>

            <div className="finish">
                <Link to="/sucesso">
                    <button onClick={() => {
                        callback(selectedSeats, nome, CPF)
                    }}>Reservar assento(s)</button>
                </Link>
            </div>
        </main>
    )
}