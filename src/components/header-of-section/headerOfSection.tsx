import {
    headersOfSectionData,
    HeadersOfSection,
} from "@/constans/headersOfSection";
import "@/components/header-of-section/headerOfSection.scss";

interface Props {
    sectionType: string;
}

export const HeaderOfSection = (props: Props) => {
    const { sectionType } = props;

    const toClassNameOfHeader = (sectionType: string) => {
        return Object.keys(headersOfSectionData).find((el) => {
            const newEl = el as keyof HeadersOfSection;
            return headersOfSectionData[newEl] === sectionType;
        });
    };
    const classNameOfHeader = toClassNameOfHeader(sectionType);

    return (
        <div className={`header-of-section ${classNameOfHeader}`}>
            <p>{props.sectionType}</p>
        </div>
    );
};
