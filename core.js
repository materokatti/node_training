const path = require("path");
const util = require("util");
const v8 = require("v8");

const dirUpload = path.join(
    __dirname,
    "www",
    "devstory",
    "uploads"
);

util.log(path.basename(__filename));
util.log(dirUpload);
util.log(v8.getHeapStatistics());