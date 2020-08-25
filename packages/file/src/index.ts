const path = require("path");
const glob = require("glob");

module.exports.globLoader = (dir) => {
    const matchFiles = glob.sync(path.resolve(__dirname, dir));
    return matchFiles
}