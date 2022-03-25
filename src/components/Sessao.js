import Footer from "./Footer";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

let selectedSeats = [];
let seatsID = [];

export default function Sessao(props) {
    const { callback, poster, movie, weekday, hour } = props;
    const { idShowtime } = useParams();
    const [seats, setSeats] = React.useState([]);
    const [nome, setNome] = React.useState("");
    const [CPF, setCPF] = React.useState("");

    const navigate = useNavigate();

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idShowtime}/seats`)

        promise.then(answer => {
            setSeats(answer.data.seats)
        })
    }, []);

    function selectSeats(seatNum, seatID) {
        selectedSeats = [...selectedSeats, seatNum]
        seatsID = [...seatsID, seatID]
    }

    function sendData(event) {
        event.preventDefault();

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: seatsID,
            name: nome,
            cpf: CPF
        });

        promise.then(response => {
            navigate("/sucesso")
        })
        promise.catch(console.log(promise))
    }

    return (
        <>
            <main>
                <h2>Selecione o(s) assento(s)</h2>

                <div className="seats">
                    {
                        seats.map(seat => {
                            const { isAvailable: open, id, name } = seat;
                            return (
                                <button key={id} className={open ? "" : "unavailable"} onClick={open ? () => {
                                    selectSeats(name, id);
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
                        <button className="unavailable" />
                        <p>Indisponível</p>
                    </div>
                </section>

                <form onSubmit={sendData}>
                    <section className="customer">

                        <h3>Nome do comprador:</h3>
                        <input placeholder="Digite seu nome..." onChange={(e) => {
                            setNome(e.target.value)
                        }} value={nome} required></input>
                        <h3>CPF do comprador:</h3>
                        <input placeholder="Digite seu CPF..." onChange={(e) => {
                            setCPF(e.target.value)
                        }} value={CPF} required></input>
                    </section>

                    <div className="finish">
                        <button type="submit" onClick={() => {
                            callback(selectedSeats, nome, CPF)
                        }}>Reservar assento(s)</button>
                    </div>
                </form>
            </main>

            <Footer poster={poster} movie={movie} weekday={weekday} hour={hour} />
        </>
    )
}