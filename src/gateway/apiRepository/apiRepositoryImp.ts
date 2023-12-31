import { HttpClient } from "@/common/httpClientImp";
import { ApiRepository } from "@/gateway/apiRepository/apiRepository";
import { OngoingApi } from "../apiModels/ongoingApi";
import { OngoingModel, toOngoingModels } from "../domenModels/ongoingModel";

// export class ApiRepositoryImp implements ApiRepository {
//     private baseApi = "https://shikimori.one";
//     async getMainPageOnGoing(): Promise<OngoingModel[]> {
//         const resp = await fetch(`${this.baseApi}/api/animes/21`);
//         console.log(await resp.json(), "atot");
//         const response = await fetch(
//             `${this.baseApi}/api/animes?limit=8&status=ongoing&score=7&kind=tv&order=popularity`,
//             // `${this.baseApi}/api/animes/21`,
//             {
//                 method: "GET",
//                 headers: new Headers(),
//             }
//         );
//         if (response.ok) {
//             const data = await response.json();
//             const result = toOngoingModels(data as OngoingApi[]);
//             return result;
//         }
//         throw new Error("Problem with fetch");
//     }
// }

export class ApiRepositoryImp implements ApiRepository {
    async getMainPageOnGoing(): Promise<OngoingModel[]> {
        const http = new HttpClient();

        const response = await http.get<OngoingApi[]>(
            "animes?limit=8&status=ongoing&score=7&kind=tv&order=popularity"
        );
        return toOngoingModels(response);
    }
}
