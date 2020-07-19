import { Action } from "redux";
import { send, WEBSOCKET_MESSAGE, DEFAULT_PREFIX } from "@giantmachines/redux-websocket";

export const turnLetter: Action = send({ key: 'TURN_LETTER' });
export function guessWord(word: string): Action {
    return send({ key: 'GUESS_WORD', word, playerId: 0 });
}

export const REDUX_WEBSOCKET_MESSAGE = `${DEFAULT_PREFIX}::${WEBSOCKET_MESSAGE}`;