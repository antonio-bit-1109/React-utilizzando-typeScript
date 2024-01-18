import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApprondimentoArticolo from "./components/ApprondimentoArticolo";

const App = () => {
    const [proppino, setProppino] = useState("Giornalino Giornaletto");

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainComponent proppino={proppino} />} />
                    <Route path="approfondimenti/:id" element={<ApprondimentoArticolo />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
