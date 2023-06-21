import { ApiRepository } from "@/gateway/apiRepository/apiRepository";
import { OngoingApi } from "../apiModels/ongoingApi";
import { OngoingModel, toOngoingModels } from "../domenModels/ongoingModel";

export class ApiRepositoryImp implements ApiRepository {
    private baseApi = "https://shikimori.one";
    async getMainPageOnGoing(): Promise<OngoingModel[]> {
        const response = await fetch(
            `${this.baseApi}/api/animes?limit=7&status=ongoing&order=ranked`,
            {
                method: "GET",
                headers: new Headers(),
            }
        );
        if (response.ok) {
            const data = await response.json();
            const result = toOngoingModels(data as OngoingApi[]);
            return result;
        }
        throw new Error("Problem with fetch");
    }
}
