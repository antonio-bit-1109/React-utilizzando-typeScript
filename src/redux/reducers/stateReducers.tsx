import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* definisco il tipo dellostato nell interfaccia e lo esporto  */
export interface InitialStateType {
    myObj: null | Object;
}

// inizializzo lo stato e gli do il tipo
const initialState: InitialStateType = {
    myObj: null,
};

// Creazione del slice
const storeSlice = createSlice({
    name: "myState",
    initialState,
    reducers: {
        setCityname: (state, action: PayloadAction<null | Object>) => {
            state.myObj = action.payload;
        },
    },
});

// Esportazione delle azioni e del riduttore
export const { setCityname } = storeSlice.actions;
export default storeSlice.reducer;
