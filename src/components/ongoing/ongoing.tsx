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

    return (
        <div className="ongoing">
            {ongoings.map((el) => {
                return <p>{el.name}</p>;
            })}
        </div>
    );
};
