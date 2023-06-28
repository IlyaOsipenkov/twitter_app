import "@/components/hashtags-item/hashtagsitem.scss";

export const HashtagsItem = ({ props }) => {
    const { type, id, color, hashtags } = props;
    console.log(type);
    return (
        <div className={`hashtags-section ${type}`}>
            <div className="section--header">
                <div className="vertical-delimiter"></div>
                <h1>{type}</h1>
            </div>
            <div className="section--body">
                {Object.keys(hashtags).map((el) => {
                    const hashtag = hashtags[el].ru;
                    return (
                        <div className="hashtag">
                            <p key={hashtag}>{hashtag}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
