const enforceHTTPS = (req, res, next) => {
    if (process.env.NODE_ENV === "production") {
        const isSecure =
            req.secure || req.headers["x-forwarded-proto"] === "https";

        if (!isSecure) {
            return res.redirect(`https://${req.headers.host}${req.url}`);
        }
    }

    next();
};

module.exports = enforceHTTPS;