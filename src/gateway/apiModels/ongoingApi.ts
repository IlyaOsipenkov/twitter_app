import { ImageApi } from "@/gateway/apiModels/imageApi";

export interface OngoingApi {
    id: number;
    name: string;
    russian: string;
    image: ImageApi;
    url: string;
    kind: string;
    score: string;
    status: string;
    episodes: number;
    episodes_aired: number;
    aired_on: string;
    released_on: null | string;
}
