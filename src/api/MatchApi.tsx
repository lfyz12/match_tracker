import {AxiosResponse} from "axios";
import {IMatch} from "../models/IMatch";
import {$host} from "../http";
interface IMatchResponse {
    ok: boolean;
    data: {
        matches: IMatch[];
    };
}
export default class MatchApi {
    static async getMatches(): Promise<AxiosResponse<IMatchResponse>> {
        return $host.get('/fronttemp')
    }
}