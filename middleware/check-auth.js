const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    // try {
    //     const decoded = jwt.verify(req.body.token, 'secret');
    //     req.userData = decoded;
    //     next();
    // } catch (error) {
    //     return res.status(403).json({
    //         message: 'Auth failed'
    //     })
    // }





    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'secret', { algorithm: "HS256" }, (err, decoded) => {

            // if there has been an error...
            if (err) {
                // shut them out!
                res.status(500).json({ error: "Not Authorized" });
                throw new Error("Not Authorized");
            }

            req.userData = decoded;

            return next();
        });
    } else {
        res.status(500).json({ error: "Not Authorized" });
    }
}




