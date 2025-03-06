import {ITeam} from "./ITeam";

export interface IMatch {
    time: Date
    title: string
    homeTeam: ITeam
    awayTeam: ITeam
    homeScore: number
    awayScore: number
    status: string
}

