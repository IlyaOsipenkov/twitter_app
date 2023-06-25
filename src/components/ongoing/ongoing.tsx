import { ApiRepositoryImp } from "@/gateway/apiRepository";
import { OngoingModel } from "@/gateway/domenModels/ongoingModel";
import { useEffect, useState } from "react";
import "./ongoing.scss";

export const Ongoing = () => {
    const [ongoings, setOngoings] = useState<OngoingModel[]>([]);
    const getOngoings = () => {
        new ApiRepositoryImp().getMainPageOnGoing().then((response) => {
            setOngoings(response);
        });
    };
    useEffect(() => {
        getOngoings();
    }, []);
    console.log(ongoings);
    return (
        <div className="ongoing">
            {ongoings.map((el) => {
                return (
                    <div className="ongoing-movie" key={el.id}>
                        <img src={el.image.preview}></img>
                        <p>{el.russian}</p>
                        <p>{el.score}</p>
                    </div>
                );
            })}
        </div>
    );
};
