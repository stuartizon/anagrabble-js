export interface GameStore {
    players: Player[],
    words: Word[],
    letters: string[]
}

export interface Player {
}

export interface Word {
    value: string,
    root: string,
    playerId: number
}

export const emptyGameStore: GameStore = {
    players: [],
    words: [],
    letters: []
}