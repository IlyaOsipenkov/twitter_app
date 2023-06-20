import { OngoingApi } from "../apiModels/ongoingApi";
import { toImageModel } from "./imageModel";

export class OngoingModel {
    id!: number;
    name!: string;
    russian!: string;
    image!: {
        original: string;
        preview: string;
        x96: string;
        x48: string;
    };
    url!: string;
    kind!: string;
    score!: string;
    status!: string;
    episodes!: number;
    episodes_aired!: number;
    aired_on!: string;
    released_on?: null | string;
    constructor(ongoingModel: OngoingModel) {
        Object.assign(this, ongoingModel);
    }
}

export function toOngoingModel(ongoingApi: OngoingApi): OngoingModel {
    return new OngoingModel({
        id: ongoingApi.id,
        name: ongoingApi.name,
        russian: ongoingApi.russian,
        image: toImageModel(ongoingApi.image),
        url: ongoingApi.url,
        kind: ongoingApi.kind,
        score: ongoingApi.score,
        status: ongoingApi.status,
        episodes: ongoingApi.episodes,
        episodes_aired: ongoingApi.episodes_aired,
        aired_on: ongoingApi.aired_on,
        released_on: ongoingApi.released_on,
    });
}

export function toOngoingModels(ongoingApiArr: OngoingApi[]): OngoingModel[] {
    const models: Array<OngoingModel> = [];
    if (ongoingApiArr) {
        ongoingApiArr.forEach((el) => {
            const newModel = toOngoingModel(el);
            models.push(newModel);
        });
    }
    return models;
}
