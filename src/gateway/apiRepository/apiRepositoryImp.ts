import { ApiRepository } from "@/gateway/apiRepository/apiRepository";

export class ApiRepositoryImp implements ApiRepository {
    private baseApi = "https://shikimori.one";
    async getMainPageOnGoing(): Promise<unknown> {
        const response = await fetch(`${this.baseApi}/api/animes`, {
            method: "GET",
            headers: new Headers(),
        });
        if (response.ok) {
            return await response.json();
        }
        throw new Error("Problem with fetch");
    }
}
