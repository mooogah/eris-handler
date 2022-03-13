// Check if the Node.js version is compatible with the Eris dependency
if (
    Number(process.version.slice(1).split(".")[0]) < 10 &&
    Number(process.version.slice(1).split(".")[0]) < 4
) {
    throw new Error("Eris requires Node.js version 10.4.0 or higher.");
}

const Client = require("./Client");
new Client()._init();
