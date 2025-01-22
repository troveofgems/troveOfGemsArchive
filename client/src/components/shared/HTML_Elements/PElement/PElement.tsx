import "./PElement.scss";

export const PElement = (children: JSX.Element) => {
    return (
        <p className={"bodyText_2"}>
            {children}
        </p>
    );
}