export interface GameStore {
    players: string[],
    words: Word[],
    letters: string[]
}

export interface Word {
    value: string,
    playerId: number
}

export const emptyGameStore: GameStore = {
    players: [],
    words: [],
    letters: []
}