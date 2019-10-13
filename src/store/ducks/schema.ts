import {Player} from "../../screens/multiplayer/interfaces";

export interface MultiPlayerStateTree {
    username: string;
    peer: any;
    id: string;
    create_at: string;
    players: Array<Player>;
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