export function renderError(req, res, next) {
    return res.status(400).json({
        server: "Express + TypeScript Server Error",
        session: req.session
    });
}
