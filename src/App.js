import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import Menu from "./components/Menu";
import Filme from "./components/Filme";
import Sessao from "./components/Sessao";
import Sucesso from "./components/Sucesso";

export default function App() {
    return (
        <BrowserRouter >
            <Header />

            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/filme/:idFilme" element={<Filme />} />
                <Route path="/sessao/:idShowtime" element={<Sessao />} />
                <Route path="/sucesso" element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
    );
}