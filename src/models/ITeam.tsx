import {IPlayer} from "./IPlayer";

export interface ITeam {
    name: string
    players: IPlayer[]
    points: number
    place: number
    total_kills: number
}