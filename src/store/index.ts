import { GameStore } from "./game";
import { Player } from "./player";

export interface Store {
    game: GameStore,
    player: Player
}