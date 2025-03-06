import {IMatch} from "../models/IMatch";
import {makeAutoObservable} from "mobx";
import MatchApi from "../api/MatchApi";

export class MatchStore {
    matches = [] as IMatch[]
    error: boolean = false
    constructor() {
        makeAutoObservable(this)
    }

    setMatches(matches: IMatch[]) {
        this.matches = matches
    }

    async getMatches() {
        try {
            const {data} = await MatchApi.getMatches();
            this.setMatches(data.data.matches);
            this.error = false
            return data.data.matches;
        } catch (e) {
            console.error("Ошибка при получении матчей:", e);
            this.error = true
            return null;
        }
    }

}