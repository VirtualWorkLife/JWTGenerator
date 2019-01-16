'use strict'
const jwtmodule = require("./jwt-module");

var payload = {
    data1: "data1",
    data2: "data2",
    data3: "data3",
    data4: "data4"
}

var signOptions = {
    issuer: "Mycompany",
    subject: "phonga3cvp@gmail.com",
    audience: "http://api.mycompany.com",
    expiresIn: "12h",
    algorithm: "RS256"
}

var token = jwtmodule.sign(payload, signOptions);
console.log(token);

var verifyOptions = {
    issuer: "Mycompany",
    subject: "phonga3cvp@gmail.com",
    audience: "http://api.mycompany.com",
    expiresIn: "12h",
    algorithm: ["RS256"]
}

var result = jwtmodule.verify(token, verifyOptions);
console.log("====================   Verify Token =====================");
console.log(JSON.stringify(result));

if(result !== false) {
    var decoded = jwtmodule.decode(token, { complete: true });
    console.log("====================   Verify Token =====================");
    console.log("Decoded jwt: " + JSON.stringify(decoded));
}
