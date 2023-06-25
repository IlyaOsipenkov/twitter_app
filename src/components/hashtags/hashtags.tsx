import { ApiRepositoryImp } from "@/gateway/apiRepository";
import { OngoingModel } from "@/gateway/domenModels/ongoingModel";
import { useEffect, useState } from "react";

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
    const toHashtag = async () => {
        const cringe = await fetch("https://shikimori.one/api/animes/53393");
        try {
            const data = await cringe;
            console.log(cringe);
            // setHashtags(data);
        } catch (e) {
            console.warn(e, "fetch trouble");
        }
        console.log(hashtags);
    };
    toHashtag();
    return <div className="hashtags"></div>;
};
