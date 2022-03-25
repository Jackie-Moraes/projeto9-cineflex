import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import Menu from "./components/Menu";
import Filme from "./components/Filme";
import Sessao from "./components/Sessao";
import Sucesso from "./components/Sucesso";


export default function App() {

    const [movie, setMovie] = React.useState("");
    const [date, setDate] = React.useState("");
    const [showtime, setShowtime] = React.useState("");
    const [seats, setSeats] = React.useState([]);
    const [buyer, setBuyer] = React.useState("");
    const [CPF, setCPF] = React.useState("");

    function storeMovie(movieInfo) {
        setMovie(movieInfo);
    }

    function storeDateAndTime(dateInfo, showtimeInfo) {
        setDate(dateInfo);
        setShowtime(showtimeInfo)
    }

    function storePurchase(seatsInfo, buyerInfo, cpfInfo) {
        setSeats(...seats, seatsInfo)
        setBuyer(buyerInfo);
        setCPF(cpfInfo);
    }


    return (
        <BrowserRouter >
            <Header />

            <Routes>
                <Route path="/" element={<Menu callback={storeMovie}/>} />
                <Route path="/filme/:idFilme" element={<Filme callback={storeDateAndTime}/>} />
                <Route path="/sessao/:idShowtime" element={<Sessao callback={storePurchase}/>} />
                <Route path="/sucesso" element={<Sucesso movie={movie} date={date} hour={showtime} seats={seats} name={buyer} cpf={CPF}/>} />
            </Routes>
        </BrowserRouter>
    );
}