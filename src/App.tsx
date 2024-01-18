import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApprondimentoArticolo from "./components/ApprondimentoArticolo";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainComponent />} />
                    <Route path="approfondimenti/:id" element={<ApprondimentoArticolo />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
