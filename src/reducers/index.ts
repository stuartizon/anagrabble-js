import { Reducer } from "redux";
import { GameStore, emptyGameStore } from "../store";
import { REDUX_WEBSOCKET_MESSAGE } from "../actions";

const reducer: Reducer<GameStore> = (store = emptyGameStore, action) => {
    switch (action.type) {
        case REDUX_WEBSOCKET_MESSAGE:
            return JSON.parse(action.payload.message);
        default:
            console.log(action);
            return store;
    }
}

export default reducer;