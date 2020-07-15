import { Action } from "redux";
import { send } from "@giantmachines/redux-websocket/dist";

export const turnLetter: Action = send({ key: 'TURN_LETTER' });