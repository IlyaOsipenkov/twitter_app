interface Props {
    sectionType: string;
}

export const HeaderOfSection = (props: Props) => {
    return (
        <div className="header-of-section">
            <p>{props.sectionType}</p>
        </div>
    );
};
