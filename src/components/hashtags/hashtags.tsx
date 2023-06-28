import { hashtagsMap } from "@/constans/hashtagsConstans";
import { ApiRepositoryImp } from "@/gateway/apiRepository";
import { OngoingModel } from "@/gateway/domenModels/ongoingModel";
import { useEffect, useState } from "react";
import { hashtagsSections } from "@/constans/hashtagsConstans";
import { title } from "process";
import "@/components/hashtags/hashtags.scss";
import { HashtagsItem } from "../hashtags-item/hashtagsItem";
export const Hashtags = () => {
    const [hashtags, setHashtags] = useState<unknown>();

    // const getHashtags = () => {
    //     new ApiRepositoryImp().getMainPageOnGoing().then((response) => {
    //         setHashtags(response);
    //     });
    // };
    // useEffect(() => {
    //     getHashtags();
    // }, []);
    // const { ...titles } = hashtagsMap;
    // console.log(titles);
    // const hashtagsArr = [];
    // for (const key in hashtagsMap) {
    //     hashtagsArr.push(key);
    // }
    useEffect(() => {
        // Hashtags();
    }, []);
    return (
        <div className="hashtags">
            {Object.keys(hashtagsMap).map((el) => {
                const id = hashtagsMap[el].id;
                const props = hashtagsMap[el];

                return (
                    <div key={id} className={"hashtag"}>
                        <HashtagsItem props={props} />
                    </div>
                );
            })}
        </div>
    );
};
