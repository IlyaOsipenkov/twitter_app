export const hashtagsSections = ["animes", "manga", "ranobe"] as const;
type HashtagsSections = (typeof hashtagsSections)[number];

export interface HashtagsMap {
    type: string;
    id: number;
    color: string;
    linkUrl: string;
    hashtags: { ru: string; eng: string }[];
}

export type OuterHashtagsMap = {
    [key in HashtagsSections]: HashtagsMap;
};

export const hashtagsMap: OuterHashtagsMap = {
    animes: {
        type: "АНИМЕ",
        id: 1,
        color: "red",
        linkUrl: "",
        hashtags: [
            { ru: "#Лето 2023", eng: "" },
            { ru: "#Весна 2023", eng: "" },
            { ru: "#2022", eng: "" },
            { ru: "#Онгоинг", eng: "" },
            { ru: "#Избранное", eng: "" },
            { ru: "#Рекомендации", eng: "" },
        ],
    },
    manga: {
        type: "МАНГА",
        id: 2,
        color: "blue",
        linkUrl: "",
        hashtags: [
            { ru: "#Манга", eng: "" },
            { ru: "#Манхва", eng: "" },
            { ru: "#Маньхуа", eng: "" },
            { ru: "#Ваншот", eng: "" },
            { ru: "#Додзинси", eng: "" },
            { ru: "#Избранное", eng: "" },
            { ru: "#Рекомендации", eng: "" },
        ],
    },
    ranobe: {
        type: "РАНОБЕ",
        id: 3,
        color: "green",
        linkUrl: "",
        hashtags: [{ ru: "#Избранное", eng: "" }],
    },
};
