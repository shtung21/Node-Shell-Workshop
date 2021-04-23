const { doesNotMatch } = require("node:assert");

module.exports = function (done) {
  const fs = require("fs");
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      // throw err;
      done("Something went wrong!");
    } else {
      // process.stdout.write(files.join("\n"));
      // process.stdout.write("prompt > ");
      done(files.join("\n"));
    }
  });
};
