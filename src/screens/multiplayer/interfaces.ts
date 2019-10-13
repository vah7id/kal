// interfaces

export interface Player {
    username: string;
    id: string;
    initiator: boolean;
    status: string;
}

export interface UsernameProps {
    username: string;
    createGame: any;
    updateGame: any;
    setUsername: any;
    navigate: any;
}

export interface LobbyProps {
    username: string;
    navigate: any;
    status: string;
    players?: Array<Player> | any;
    updatePlayers?: any;
    updateGameStatus?: any;
    id: string;
}