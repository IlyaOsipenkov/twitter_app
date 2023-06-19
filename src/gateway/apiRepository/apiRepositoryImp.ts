import { ApiRepository } from "@/gateway/apiRepository/apiRepository";

export class ApiRepositoryImp implements ApiRepository {
    async getMainPageOnGoing(): Promise<unknown> {
        // const response = await fetch("https://shikimori.one/api/animes/", {
        //     method: "GET",
        //     headers: new Headers(),
        // });
        // console.log(response);
        // return response;

        const base = "https://shikimori.one";
        const cringe = await fetch(`${base}/api/animes`, {
            method: "GET",
            headers: new Headers(),
        });
        console.log(cringe);
        return cringe;
    }
}
