import { Reducer } from "redux";
import { JoinAction } from "../actions";
import { Player } from "../store/player";

const reducer: Reducer<Player, JoinAction> = (store = { name: "" }, action) => {
    switch (action.type) {
        case "JOIN":
            return { name: action.name }
        default:
            return store;
    }
}

export default reducer;