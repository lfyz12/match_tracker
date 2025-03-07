import {IMatch} from "../models/IMatch";
import {makeAutoObservable, runInAction} from "mobx";
import MatchApi from "../api/MatchApi";

export class MatchStore {
    matches = [] as IMatch[]
    error: boolean = false
    loading: boolean = false
    constructor() {
        makeAutoObservable(this)
    }

    setMatches(matches: IMatch[]) {
        this.matches = matches
    }

    async getMatches() {
        this.loading = true;
        this.error = false;

        try {
            const { data } = await MatchApi.getMatches();
            this.setMatches(data.data.matches);
        } catch (e) {
            console.error("Ошибка: не удалось загрузить информацию", e);
            this.error = true;
        } finally {
            this.loading = false;
        }
    }

}