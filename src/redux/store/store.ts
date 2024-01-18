import { configureStore } from "@reduxjs/toolkit";
import stateReducer, { StoreState } from "../reducers/stateReducers"; // Aggiungi "from" qui

// Definizione dello stato dell'applicazione
export interface RootState {
    queryState: StoreState; // Sostituisci StoreState con il tipo effettivo del tuo stato
    // Aggiungi ulteriori sezioni dello stato se necessario
}

// Creazione dello store con il rootReducer e la configurazione
const store = configureStore({
    reducer: {
        queryState: stateReducer,
        // Aggiungi altri riduttori se necessario
    },
});

export default store;
