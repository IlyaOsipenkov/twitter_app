import { OngoingModel } from "../domenModels/ongoingModel";

export interface ApiRepository {
    getMainPageOnGoing(): Promise<OngoingModel[]>;
}
