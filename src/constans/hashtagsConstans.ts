const hashtagsSections = ["animes", "manga", "ranobe"] as const;
type HashtagsSections = (typeof hashtagsSections)[number];

export interface HashtagsMap {
    color: string;
    linkUrl: string;
    hashtags: {
        [key: string]: string;
    };
}

export type OuterHashtagsMap = {
    [key in HashtagsSections]: HashtagsMap;
};

export const hashtagsMap: OuterHashtagsMap = {
    animes: {
        color: "red",
        linkUrl: "",
        hashtags: {
            "#Лето 2023": "",
            "#Весна 2023": "",
            "#2022": "",
            "#Онгоинг": "",
            "#Избранное": "",
            "#Рекомендации": "",
        },
    },
    manga: {
        color: "blue",
        linkUrl: "",
        hashtags: {
            "#Манга": "",
            "#Манхва": "",
            "#Маньхуа": "",
            "#Ваншот": "",
            "#Додзинси": "",
            "#Избранное": "",
            "#Рекомендации": "",
        },
    },
    ranobe: {
        color: "green",
        linkUrl: "",
        hashtags: {
            "#Избранное": "",
        },
    },
};
