import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definizione del tipo dello stato dello slice
interface MyState {
    cityname: string;

    // Sostituisci 'any' con il tipo effettivo dei dati meteo
}

// Inizializzazione dello stato
const initialState: MyState = {
    cityname: "",
};

// Creazione del slice
const storeSlice = createSlice({
    name: "myState",
    initialState,
    reducers: {
        setCityname: (state, action: PayloadAction<string>) => {
            state.cityname = action.payload;
        },
    },
});

// Estrazione delle azioni e del riduttore
export const { setCityname } = storeSlice.actions;
export default storeSlice.reducer;
export interface StoreState {
    // Definizione del tuo stato
}
