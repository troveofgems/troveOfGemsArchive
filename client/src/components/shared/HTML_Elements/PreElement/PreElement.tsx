import "./PreElement.scss";

export const PreElement = (children: any) => {
    return (
        <pre className={"customPreElementStyles"}>
            {children}
        </pre>
    );
}