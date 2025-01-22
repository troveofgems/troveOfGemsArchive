import "./PageIntroduction.scss";

export const PageIntroduction = (children: JSX.Element) => {
    return (
        <div id={"pageIntroduction"} className={"m-3"}>
            {children}
        </div>
    );
}