import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ObjectFetch } from "../../interfaces/interfaces";
/* definisco il tipo dellostato nell interfaccia e lo esporto  */

export interface InitialStateType {
    ObjArray: null | ObjectFetch[];
}

// inizializzo lo stato e gli do il tipo
const initialState: InitialStateType = {
    ObjArray: null,
};

// Creazione del slice
const storeSlice = createSlice({
    name: "myState",
    initialState,
    reducers: {
        setObjArray: (state, action: PayloadAction<ObjectFetch[]>) => {
            state.ObjArray = action.payload;
        },
    },
});

// Esportazione delle azioni e del riduttore
export const { setObjArray } = storeSlice.actions;
export default storeSlice.reducer;
