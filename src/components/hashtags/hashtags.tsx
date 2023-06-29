import { hashtagsMap, OuterHashtagsMap } from "@/constans/hashtagsConstans";
import { ApiRepositoryImp } from "@/gateway/apiRepository";
import { OngoingModel } from "@/gateway/domenModels/ongoingModel";
import { useEffect, useState } from "react";
import { hashtagsSections } from "@/constans/hashtagsConstans";
import { title } from "process";
import "@/components/hashtags/hashtags.scss";
import { HashtagsItem } from "../hashtags-item/hashtagsItem";

export const Hashtags = () => {
    return (
        <div className="hashtags">
            {Object.keys(hashtagsMap).map((el) => {
                const newEl = el as keyof OuterHashtagsMap;
                const id = hashtagsMap[newEl].id;
                const props = hashtagsMap[newEl];

                return (
                    <div key={id} className={"hashtag"}>
                        <HashtagsItem
                            type={props.type}
                            hashtags={props.hashtags}
                        />
                    </div>
                );
            })}
        </div>
    );
};
