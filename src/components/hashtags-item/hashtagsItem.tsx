import "@/components/hashtags-item/hashtagsitem.scss";
import { HashtagObj } from "@/constans/hashtagsConstans";

interface Props {
    type: string;
    hashtags: HashtagObj[];
}
export const HashtagsItem = (props: Props) => {
    const { type, hashtags } = props;
    return (
        <div className={`hashtags-section ${type}`}>
            <div className="section--header">
                <div className="vertical-delimiter"></div>
                <h1>{type}</h1>
                <div className="arrow"></div>
            </div>
            <div className="section--body">
                {hashtags.map((el) => {
                    return (
                        <div key={el.ru} className="hashtag">
                            <p key={el.ru}>{el.ru}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
