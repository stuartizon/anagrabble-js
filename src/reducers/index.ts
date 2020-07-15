import { Reducer } from "redux";
import { GameStore, emptyGameStore } from "../store";
import { DEFAULT_PREFIX, WEBSOCKET_MESSAGE } from "@giantmachines/redux-websocket";

const reducer: Reducer<GameStore> = (store = emptyGameStore, action) => {
    switch (action.type) {
        case `${DEFAULT_PREFIX}::${WEBSOCKET_MESSAGE}`:
            return JSON.parse(action.payload.message);
        default:
            console.log(action);
            return store;
    }
}

export default reducer;