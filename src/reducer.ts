import { Reducer } from "redux";
import { GameStore, emptyGameStore } from "./store";

const reducer: Reducer<GameStore> = (store = emptyGameStore, action) => {
    switch (action.type) {
        default:
            console.log(action);
            return store;
    }
}

export default reducer;