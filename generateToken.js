const jwt = require("jsonwebtoken");

const timestamp = Date.now() + 60 * 1000;

const payload = {
  sub: "01961f0d-2f68-759e-9d05-5f67f87e0bdd",
  iat: timestamp,
  exp: timestamp,
  aud: "30d18abe-e51e-4664-918a-bee51ee664fd",
};

const secret =
  "54c4577ad1fa36f3768995ba00bc33135c630ab6f698ae0ca5e38dbc53e91fa7";

const token = jwt.sign(payload, secret, { algorithm: "HS256" });

console.log("Your JWT token:");
console.log(token);
