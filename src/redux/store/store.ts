import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../reducers/stateReducers";
/* importo l'interfaccia  */
import { InitialStateType } from "../reducers/stateReducers";

/* qui definisco il tipo del mio state globale e lo esporto */
export interface PincoPallino {
    queryState: InitialStateType;
}

// Creazione dello store con il rootReducer e la configurazione
const store = configureStore({
    reducer: {
        queryState: stateReducer,
        // Aggiungi altri riduttori se necessario
    },
});

export default store;
