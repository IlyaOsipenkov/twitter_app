import {
    headersOfSectionData,
    HeadersOfSection,
} from "@/constans/headersOfSection";
import "@/components/header-of-section/headerOfSection.scss";

interface Props {
    sectionType: string;
    colorOfSectionType: string;
}

export const HeaderOfSection = (props: Props) => {
    const { sectionType, colorOfSectionType } = props;

    const toClassNameOfHeader = (sectionType: string) => {
        return Object.keys(headersOfSectionData).find((el) => {
            const newEl = el as keyof HeadersOfSection;
            return headersOfSectionData[newEl] === sectionType;
        });
    };
    const classNameOfHeader = toClassNameOfHeader(sectionType);

    const toLowOpacityColorOfSection = (colorOfSection: string) => {
        const lowestColor = colorOfSection + "10";
        const lowerColor = `5px solid ${colorOfSection}` + "80";
        console.log(lowerColor);
        return {
            colorOne: lowestColor,
            colorTwo: lowerColor,
        };
    };
    const { colorOne, colorTwo } =
        toLowOpacityColorOfSection(colorOfSectionType);
    return (
        <div
            className={`header-of-section ${classNameOfHeader}`}
            style={{ background: `${colorOne}`, borderLeft: `${colorTwo}` }}
        >
            <p style={{ color: `${colorOfSectionType}` }}>
                {props.sectionType}
            </p>
        </div>
    );
};
