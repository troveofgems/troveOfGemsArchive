export default function tryMiddleware(callback) {
    return async (req, res, next) => {
        try {
            await callback(req, res, next);
        }
        catch (err) {
            // Set Status Code
            res.statusCode = (res.statusCode < 400 ? 400 : (res.statusCode || 500));
            return res
                .send(err);
        }
    };
}
