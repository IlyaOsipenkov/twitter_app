import { ImageApi } from "../apiModels/imageApi";

export class ImageModel {
    original!: string;
    preview!: string;
    x96!: string;
    x48!: string;
    constructor(imageModel: ImageModel) {
        Object.assign(this, imageModel);
    }
}

export function toImageModel(imageApi: ImageApi): ImageModel {
    return new ImageModel({
        original: imageApi.original,
        preview: imageApi.preview,
        x96: imageApi.x96,
        x48: imageApi.x48,
    });
}
