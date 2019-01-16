const fs = require("fs");
const jwt = require("jsonwebtoken");


var privateKey = fs.readFileSync("./private.key", "utf-8");
var publicKey = fs.readFileSync("./public.key", "utf-8");

module.exports = {
    sign: (payload, options) => {
        return jwt.sign(payload, privateKey, options);
    },
    verify: (token, options) => {
        try {
            return jwt.verify(token, publicKey, options);
        } catch (error) {
            return false;
        }
    },
    decode: (token, options) => {
        return jwt.decode(token, options);
    }
}
