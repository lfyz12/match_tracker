import {IMatch} from "../models/IMatch";
import {makeAutoObservable} from "mobx";
import MatchApi from "../api/MatchApi";

export class MatchStore {
    matches = [] as IMatch[]

    constructor() {
        makeAutoObservable(this)
    }

    setMatches(matches: IMatch[]) {
        this.matches = matches
    }

    async getMatches() {
        try {
            const {data} = await MatchApi.getMatches()
            this.setMatches(data.data.matches)
            console.log(this.matches)
            return data.data.matches
        } catch (e) {
            throw new Error("Not implemented");
        }
    }
}