import "./SectionPageHeader.scss";

export const SectionPageHeader = (sectionTitle: string, sectionSubText: string) => {
    return (
        <div className="sectionHeader">
            <hr className="hrStyle"/>
            <h2 className={"h3Styles"}>{sectionTitle}</h2>
            <p className={"bodyText_4"}>
                {sectionSubText}
            </p>
            <hr className="hrStyle"/>
        </div>
    )
}