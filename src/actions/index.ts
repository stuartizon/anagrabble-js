import { Action } from "redux";
import { send, WEBSOCKET_MESSAGE, DEFAULT_PREFIX } from "@giantmachines/redux-websocket";

export const turnLetter: Action = send({ key: 'TURN_LETTER' });
export function guessWord(word: string): Action {
    return send({ key: 'GUESS_WORD', word, playerId: 0 });
}
export function join(name: string): JoinAction {
    return { type: JOIN, name };
}

export interface JoinAction extends Action<typeof JOIN> {
    name: string
} 

export const JOIN = 'JOIN';
export const REDUX_WEBSOCKET_MESSAGE = `${DEFAULT_PREFIX}::${WEBSOCKET_MESSAGE}`;