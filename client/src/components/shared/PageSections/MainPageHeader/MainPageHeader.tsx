import "./MainPageHeader.scss";

export const MainPageHeader = (children: string) => {
    return (
        <h2 id={"pageTop"} className={"mainPageHeader m-3"}>
            {children}
        </h2>
    );
}