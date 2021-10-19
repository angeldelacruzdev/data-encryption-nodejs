//crypto module
const crypto = require("crypto");

const algorithm = "aes-256-cbc";

//generate 16 bytes of random data;
const initVector = crypto.randomBytes(16);

//protected data
const message = "This is a secret message";

//Secret key generate 32 bytes of random data
const SecurityKey = crypto.randomBytes(32);

// the cipher function
const cipher = crypto.createCipheriv(algorithm, SecurityKey, initVector);

let encryptedData = cipher.update(message, "utf-8", "hex");

encryptedData += cipher.final("hex");

console.log("Encrypted message: ", encryptedData);

const decipher = crypto.createDecipheriv(algorithm, SecurityKey, initVector);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf-8");

console.log("Decrypted message: " + decryptedData);
