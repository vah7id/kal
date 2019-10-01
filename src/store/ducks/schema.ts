export interface MultiPlayerStateTree {
    username: string;
}

export interface SinglePlayerStateTree {
    status: string;
}

export interface GameState {
    game: SinglePlayerStateTree;
    multiplayer: MultiPlayerStateTree;
    router: any;
}