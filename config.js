const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "S9RYQG69",
  MONGODB: process.env.MONGODB || "mongodb://mongo:AtighLVAFNeKubYUVuulqeadsJmKDyTF@shortline.proxy.rlwy.net:59510",
  OWNER_NUM: process.env.OWNER_NUM || "94741532583",
};
