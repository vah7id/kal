export interface MultiPlayerStateTree {
    username: string;
    peer: any;
    id: string;
    create_at: string;
    players: string[];
    sessionId: string;
    roomId: string;
    loggedInUserId: string;
}

export interface SinglePlayerStateTree {
    status: string;
}

export interface GameState {
    game: SinglePlayerStateTree;
    multiplayer: MultiPlayerStateTree;
    router: any;
}