const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.cookie.token;

    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid Token" });
    }
}

module.exports = auth;
