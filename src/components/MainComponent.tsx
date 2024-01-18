import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PincoPallino } from "../redux/store/store"; // Assicurati di importare RootState dal tuo store

const MainComponent: React.FC = () => {
    const myObj = useSelector((state: PincoPallino) => state.queryState.myObj); // Specifica il tipo dello stato radice
    console.log("mioOggettoVUOTO POI FETCHATO", myObj);

    // Usa useDispatch se hai bisogno di dispatchare azioni
    // const dispatch = useDispatch();

    return <div></div>;
};

export default MainComponent;
